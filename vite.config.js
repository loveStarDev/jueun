import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // 개발 서버 포트 설정
    },
    build: {
        outDir: 'dist', // 빌드 결과물 디렉토리 설정
    },
    resolve: {
        alias: {
            '@': '/src', // 경로 별칭 설정
        },
    },
});