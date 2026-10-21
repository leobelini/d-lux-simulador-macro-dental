import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const gitDir = path.join(rootDir, '.git');
const tempIndex = path.join(gitDir, 'temp_gh_pages_index');

console.log('🚀 Iniciando deploy para a branch gh-pages...');

// 1. Executar build do Astro
console.log('📦 Compilando aplicação Astro para produção...');
execSync('npm run build', {
  cwd: rootDir,
  stdio: 'inherit',
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
});

// 2. Executar build standalone
console.log('📦 Compilando versão standalone...');
execSync('npm run build:standalone', {
  cwd: rootDir,
  stdio: 'inherit',
  env: { ...process.env },
});

// 3. Garantir existência do .nojekyll
const nojekyllPath = path.join(distDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
}

// 4. Criar commit direto para a branch gh-pages usando git plumbing
console.log('🌿 Atualizando branch gh-pages com os arquivos de build...');
try {
  if (fs.existsSync(tempIndex)) {
    fs.unlinkSync(tempIndex);
  }

  const gitEnv = {
    ...process.env,
    GIT_DIR: gitDir,
    GIT_INDEX_FILE: tempIndex,
    GIT_WORK_TREE: distDir,
  };

  execSync('git add -A', { cwd: rootDir, env: gitEnv, stdio: 'pipe' });
  const treeId = execSync('git write-tree', { cwd: rootDir, env: gitEnv, encoding: 'utf-8' }).trim();

  // Obter parent commit da gh-pages se já existir
  let parentArg = '';
  try {
    const parentCommit = execSync('git rev-parse refs/heads/gh-pages', { cwd: rootDir, encoding: 'utf-8' }).trim();
    if (parentCommit) {
      parentArg = `-p ${parentCommit}`;
    }
  } catch {
    // Primeira vez criando gh-pages
  }

  const commitMsg = `deploy: build GitHub Pages (${new Date().toISOString()})`;
  const commitId = execSync(`git commit-tree ${treeId} ${parentArg} -m "${commitMsg}"`, {
    cwd: rootDir,
    env: gitEnv,
    encoding: 'utf-8',
  }).trim();

  execSync(`git update-ref refs/heads/gh-pages ${commitId}`, { cwd: rootDir, stdio: 'pipe' });

  if (fs.existsSync(tempIndex)) {
    fs.unlinkSync(tempIndex);
  }

  console.log(`✅ Branch gh-pages criada/atualizada com sucesso! Commit: ${commitId.slice(0, 7)}`);

  // 5. Enviar para o repositório remoto origin se configurado
  console.log('⬆️ Enviando branch gh-pages para origin...');
  execSync('git push origin gh-pages --force', { cwd: rootDir, stdio: 'inherit' });

  console.log('\n🎉 Deploy concluído com sucesso!');
  console.log('🌐 Acesse: https://leobelini.github.io/d-lux-simulador-macro-dental/');
} catch (err) {
  if (fs.existsSync(tempIndex)) {
    fs.unlinkSync(tempIndex);
  }
  console.error('❌ Erro durante o processo de deploy:', err.message);
  process.exit(1);
}
