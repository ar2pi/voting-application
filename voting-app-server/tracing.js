// tracing.js
'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

// Configure the OTLP trace exporter
const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:4318/v1/traces', // Replace with the OTLP collector URL
});

// Create the OpenTelemetry SDK
const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'node-service', // Replace with your service name
  }),
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

// Initialize the SDK
sdk.start()
  .then(() => {
    console.log('Tracing initialized');
  })
  .catch((error) => {
    console.error('Error initializing tracing', error);
  });

// Ensure the SDK shuts down gracefully on process exit
process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.error('Error terminating tracing', error))
    .finally(() => process.exit(0));
});
