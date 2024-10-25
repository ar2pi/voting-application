'use strict';
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
<<<<<<< HEAD
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { DiagConsoleLogger, DiagLogLevel, diag } = require('@opentelemetry/api');
const { PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');
// Enable detailed logs for troubleshooting (optional)
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);
=======
const { OTLPTraceExporter, OTLPMetricExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');
const { DiagConsoleLogger, DiagLogLevel, diag } = require('@opentelemetry/api');

// Enable detailed logs for troubleshooting (optional)
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

>>>>>>> 599835727ece7c5a5db5efb4396ee83f7af41767
// Configure the OTLP trace exporter
const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:4318/v1/traces',
});
// Configure the OTLP metric exporter
const metricExporter = new OTLPMetricExporter({
  url: 'http://localhost:4318/v1/metrics',
});
<<<<<<< HEAD
=======

// Configure the OTLP metric exporter
const metricExporter = new OTLPMetricExporter({
  url: 'http://localhost:4318/v1/metrics', // Replace with the OTLP collector URL for metrics
});

>>>>>>> 599835727ece7c5a5db5efb4396ee83f7af41767
// Create the OpenTelemetry SDK
const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'node-service',
  }),
  traceExporter,
  metricReader: new PeriodicExportingMetricReader({
    exporter: metricExporter,
    exportIntervalMillis: 60000, // Adjust the interval to control how often metrics are exported
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});
<<<<<<< HEAD
// Initialize the SDK
(async () => {
  try {
    await sdk.start();
    console.log('Tracing, Metrics, and Logs initialized');
  } catch (error) {
=======

// Optional: Console exporter to see spans in the console (useful for development)
sdk.configureTracerProvider(provider => {
  provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
});

// Initialize the SDK
sdk.start()
  .then(() => {
    console.log('Tracing, Metrics, and Logs initialized');
  })
  .catch((error) => {
>>>>>>> 599835727ece7c5a5db5efb4396ee83f7af41767
    console.error('Error initializing tracing', error);
  }
})();
// Ensure the SDK shuts down gracefully on process exit
process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('Tracing, Metrics, and Logs terminated'))
    .catch((error) => console.error('Error terminating tracing', error))
    .finally(() => process.exit(0));
});