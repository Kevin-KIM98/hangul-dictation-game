import { defineConfig } from 'astro/config';

// GitHub Pages는 https://<계정>.github.io/<저장소>/ 아래에서 열리므로
// 배포할 때만 BASE_PATH 로 하위 경로를 지정한다(개발 서버는 "/").
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
});
