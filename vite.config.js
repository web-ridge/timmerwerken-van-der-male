import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({build:{rollupOptions:{input:{home:resolve(__dirname,'index.html'),diensten:resolve(__dirname,'diensten/index.html'),projecten:resolve(__dirname,'projecten/index.html'),verbouw:resolve(__dirname,'verbouw/index.html'),nieuwbouw:resolve(__dirname,'nieuwbouw/index.html'),trappen:resolve(__dirname,'trappen/index.html'),werkwijze:resolve(__dirname,'werkwijze/index.html'),contact:resolve(__dirname,'contact/index.html')}}}});
