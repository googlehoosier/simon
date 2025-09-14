@@ .. @@
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
+  build: {
+    rollupOptions: {
+      output: {
+        manualChunks: undefined,
+      },
+    },
+  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
+  // Ensure proper SPA routing support
+  preview: {
+    port: 4173,
+    strictPort: true,
+  },
+  server: {
+    historyApiFallback: true,
+  },
});