// GitHub Pages 배포: 하위 경로로 빌드한 dist 를 gh-pages 브랜치에 올린다.
// 실행: npm run deploy
import { execSync } from 'node:child_process';
import { rmSync, writeFileSync } from 'node:fs';

const run = (cmd, opts = {}) => execSync(cmd, { stdio: 'inherit', ...opts });
const remote = execSync('git remote get-url origin').toString().trim();
const repo = remote.replace(/\.git$/, '').split('/').pop();

run('npx astro build', { env: { ...process.env, BASE_PATH: `/${repo}` } });
writeFileSync('dist/.nojekyll', ''); // _astro 폴더가 Jekyll 에 걸러지지 않게

rmSync('dist/.git', { recursive: true, force: true });
const git = (args) => run(`git ${args}`, { cwd: 'dist' });
git('init -q -b gh-pages');
git('add -A');
git('-c user.name=deploy -c user.email=deploy@users.noreply.github.com commit -q -m "Deploy"');
git(`push -f ${remote} gh-pages`);
rmSync('dist/.git', { recursive: true, force: true });
console.log('\n배포 완료');
