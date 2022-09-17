import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ command, mode })=> {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    define: {
      'process.env': {}
    },
    build: {
      manifest: false,
      minify: mode === 'development' ? false : 'terser',
      outDir: 'dist',
      sourcemap: command === 'serve' ? 'inline' : false,
      rollupOptions: {
        output: { 
          entryFileNames: "assets/quicknode.js",
          assetFileNames: `assets/[name].[ext]`
        },
      }
    },

    plugins: [react(), tsconfigPaths()],

    server: {
      // origin: 'http://localhost:5280',
      port: 5280,
    },
  });
}
