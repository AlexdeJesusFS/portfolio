import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Configurações para SCSS
    preprocessorOptions: {
      scss: {
        // Adicione opções específicas do SCSS aqui, se necessário
        // Exemplo: additionalData: `@import "src/styles/variables.scss";`
      },
    },
  },
  build: {
    // Configurações de build para otimizar code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Separa bibliotecas grandes em chunks distintos
          lottie: ["lottie-web"], // Separa lottie-web para reduzir o chunk principal
        },
      },
    },
    // Minificação de CSS é habilitada por padrão em produção com 'esbuild'
    minify: "esbuild", // Garante que o JavaScript e CSS sejam minificados
  },
});
