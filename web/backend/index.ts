import app from './app/Bootstrap';

try {
  void app;
} catch (error) {
  console.error(error);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
