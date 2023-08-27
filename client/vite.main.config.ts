import { defineConfig } from 'vite';
import path from 'path';
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config
console.log(__dirname)
export default defineConfig({

  plugins: [react(),tsconfigPaths()],

  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ['module', 'jsnext:main', 'jsnext'],

  },
});
