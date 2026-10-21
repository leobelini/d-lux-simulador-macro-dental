import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 Iniciando geração do arquivo HTML standalone (100% autônomo)...');

// 1. Garantir que o CSS do Tailwind foi compilado
const distAstroDir = path.join(rootDir, 'dist', '_astro');
let cssContent = '';

let cssFile = null;
if (fs.existsSync(distAstroDir)) {
  const files = fs.readdirSync(distAstroDir);
  const found = files.find((f) => f.endsWith('.css'));
  if (found) {
    cssFile = path.join(distAstroDir, found);
  }
}

if (!cssFile) {
  console.log('📦 Compilando estilos com Astro build...');
  execSync('ASTRO_TELEMETRY_DISABLED=1 npm run build', {
    cwd: rootDir,
    stdio: 'inherit',
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
  });
  const files = fs.readdirSync(distAstroDir);
  const found = files.find((f) => f.endsWith('.css'));
  if (found) {
    cssFile = path.join(distAstroDir, found);
  }
}

if (cssFile && fs.existsSync(cssFile)) {
  cssContent = fs.readFileSync(cssFile, 'utf-8');
} else {
  console.warn('⚠️ Arquivo CSS compilado não encontrado em dist/_astro. Usando CSS básico.');
}

// 2. Bundling do React + componentes em IIFE com esbuild
console.log('⚙️ Empacotando React + Componentes + Ícones com esbuild (IIFE)...');
const buildResult = await esbuild.build({
  entryPoints: [path.join(rootDir, 'src', 'standalone.tsx')],
  bundle: true,
  format: 'iife',
  globalName: 'DentalSimulatorApp',
  minify: true,
  platform: 'browser',
  target: ['es2020'],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  write: false,
});

const jsBundle = buildResult.outputFiles[0].text;
console.log(`✅ JavaScript empacotado: ${(jsBundle.length / 1024).toFixed(1)} KB`);

// Favicon SVG embutido em Data URI
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#0f172a"/><path d="M8 12C8 10.8954 8.89543 10 10 10H13L14.5 8H17.5L19 10H22C23.1046 10 24 10.8954 24 12V22C24 23.1046 23.1046 24 22 24H10C8.89543 24 8 23.1046 8 22V12Z" stroke="#38bdf8" stroke-width="2"/><circle cx="16" cy="17" r="4.5" stroke="#38bdf8" stroke-width="2"/><circle cx="16" cy="17" r="2" fill="#10b981"/></svg>`;
const faviconDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(faviconSvg)}`;

// 3. Montar o arquivo HTML 100% autônomo
const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D-Lux Diffuser | Simulador de Fotografia Macro Odontológica</title>
    <meta
      name="description"
      content="Aplicação proprietária D-Lux Diffuser para simulação de fotografia macro odontológica e difusores clínicos. Funciona 100% offline dando 2 cliques."
    />
    <link rel="icon" type="image/svg+xml" href="${faviconDataUri}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <style>
      /* Fallback fonts caso esteja offline */
      body {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      code, pre, .font-mono {
        font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      }
      
      /* Estilos compilados do Tailwind CSS */
      ${cssContent}
    </style>
  </head>
  <body class="bg-[#090c13] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
    <div id="root"></div>
    <script>
      ${jsBundle}
    </script>
  </body>
</html>
`;

// 4. Salvar nos locais acessíveis ao usuário
const targetFiles = [
  path.join(rootDir, 'index.html'),
  path.join(rootDir, 'simulador-macro-dental.html'),
  path.join(rootDir, 'dist', 'standalone.html'),
];

for (const target of targetFiles) {
  const dir = path.dirname(target);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(target, htmlContent, 'utf-8');
}

console.log('✨ SUCESSO! Arquivos standalone gerados:');
console.log(`📁 1. ${path.join(rootDir, 'index.html')}`);
console.log(`📁 2. ${path.join(rootDir, 'simulador-macro-dental.html')}`);
console.log(`📁 3. ${path.join(rootDir, 'dist', 'standalone.html')}`);
console.log('\n🎉 Agora você pode simplesmente dar 2 CLIQUES em qualquer um desses arquivos para abrir direto no navegador sem nenhum servidor!');
