const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const cors = require('cors');

const app = express();

// Updated Redis connection to use the Redis service in Docker
const client = redis.createClient({
    url: 'redis://redis:6379' // Connect to the Redis service running in Docker
});

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

client.on('error', (err) => console.log('Redis Client Error', err));

// Ensure Redis is connected before proceeding
(async () => {
    try {
        await client.connect();
        console.log('Connected to Redis');
    } catch (err) {
        console.error('Failed to connect to Redis:', err);
    }
})();

app.post('/api/topics', async (req, res) => {
    const { topic, description } = req.body;
    if (!topic || !description) {
        return res.status(400).send('Topic and description are required');
    }

    await client.hSet('topics', topic, description);
    await client.hSet('votes', topic, JSON.stringify([]));

    const votingUrl = `http://localhost:3000/vote/${topic}`;
    res.json({ message: 'Topic created!', votingUrl });
});

app.get('/api/topics/:topic/vote', async (req, res) => {
    const topic = req.params.topic;
    const description = await client.hGet('topics', topic);
    if (!description) {
        return res.status(404).send('Topic not found');
    }
    res.json({ topic, description });
});

app.post('/api/topics/:topic/vote', async (req, res) => {
    const topic = req.params.topic;
    const { vote, name } = req.body;

    if (!vote || !name) {
        return res.status(400).json({ error: 'Vote and name are required' });
    }

    const currentVotes = JSON.parse(await client.hGet('votes', topic)) || [];
    currentVotes.push({ name, vote });
    await client.hSet('votes', topic, JSON.stringify(currentVotes));

    res.json({ message: 'Vote counted!' });
});

app.get('/api/topics/:topic/results', async (req, res) => {
    const topic = req.params.topic;
    const votes = JSON.parse(await client.hGet('votes', topic)) || [];

    const agreeVotes = votes.filter(v => v.vote === 'agree');
    const notAgreeVotes = votes.filter(v => v.vote === 'not_agree');

    res.json({
        topic,
        countAgree: agreeVotes.length,
        countNotAgree: notAgreeVotes.length,
        votes: {
            agree: agreeVotes,
            notAgree: notAgreeVotes
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
