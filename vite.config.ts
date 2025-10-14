import { defineConfig } from 'vite';
// Angular’s official Vite plugin (Angular 17+)
import { angular } from '@angular-devkit/build-angular/plugins/vite';

export default defineConfig({
  plugins: [angular()],
  server: {
    host: '0.0.0.0',                 // allow external access
    // 🔴 put your exact ngrok domain here (from the ngrok output)
    allowedHosts: [
      'ungifted-woodrow-technologically.ngrok-free.dev',
      'localhost'
    ],
    // Optional but helps HMR over HTTPS tunnel:
    origin: 'https://ungifted-woodrow-technologically.ngrok-free.dev',
    hmr: {
      protocol: 'wss',
      host: 'ungifted-woodrow-technologically.ngrok-free.dev',
      clientPort: 443
    }
  }
});
