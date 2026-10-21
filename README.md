# 📸 D-Lux Diffuser | Simulador de Fotografia Macro Odontológica

> **Aplicação Proprietária D-Lux Diffuser**  
> Loja Oficial: [dluxdiffuser.lojavirtualnuvem.com.br](https://dluxdiffuser.lojavirtualnuvem.com.br/)  
> © 2026 D-Lux Diffuser. Todos os direitos reservados.

Um simulador interativo oficial desenvolvido para a **D-Lux**, ensinando de forma prática, visual e dinâmica os fundamentos da fotografia macro intraoral e o impacto crucial dos difusores profissionais (Twin MF-12, Ring YN-14 e Estúdio) na odontologia estética e diagnóstica.

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ (ou v20/v24)
- npm ou pnpm

### Instalação e Execução
### 🖱️ Abrir Diretamente com 2 Cliques (Sem Servidor / Standalone)
Para gerar um único arquivo HTML 100% autônomo (não precisa de `npm run dev`, nem de servidor local):

```bash
npm run build:standalone
```

Isso gera os arquivos:
- `index.html` (na raiz do projeto)
- `simulador-macro-dental.html` (na raiz do projeto)

👉 **Basta dar 2 cliques** no arquivo no Finder / Explorador de Arquivos para abrir e usar no navegador (Chrome, Safari, Edge, Firefox)!

### 🌐 Modo Desenvolvimento (com servidor Astro)
```bash
# Iniciar servidor de desenvolvimento local
npm run dev

# Ou para compilar a versão tradicional do Astro
npm run build
npm run preview
```

---

## 🎯 Funcionalidades Principais

### 1. 🔍 Distância Focal da Lente Macro (60mm, 85mm, 100mm, 180mm)
- **100mm Macro (Padrão Ouro)**: Distância de trabalho ergonômica ideal (~32cm), sem deformação anatômica dos incisivos e espaço para flashes e espelhos oclusais.
- **60mm Macro**: Mostra visualmente o problema de estar muito próximo (15cm) do paciente e a deformação de perspectiva.
- **85mm Macro**: Enquadramento ideal para retratos de sorriso e terço inferior da face.
- **180mm Tele-Macro**: Distância estéril (55cm) para cirurgias periodontais e de implantes.

### 2. ⚡ Velocidade do Obturador (1/30s a 1/1000s)
- **1/160s a 1/200s (Sincronismo com Flash)**: Congela micro-movimentos e anula completamente a luz espúria e amarelada da clínica.
- **Velocidade lenta (1/30s - 1/60s)**: Simula tremor de mão e desfoque de movimento, além de contaminação por lâmpadas de teto (3200K).
- **Velocidade ultra-rápida (> 1/200s)**: Demonstra o **efeito da cortina preta do obturador**, quando a segunda cortina fecha antes do flash estroboscópico disparar!

### 3. 🔬 Sensibilidade ISO (100 a 6400)
- **ISO 100**: Máxima fidelidade de cor, ausência total de ruído digital, essencial para identificação de periquimáceas, mamelos incisais e escala VITA.
- **ISO alto (1600 - 6400)**: Simula a granulação digital destrutiva que arruína a documentação diagnóstica.

### 4. 🎯 Abertura do Diafragma & Profundidade de Campo (f/2.8 a f/32)
- Em macro 1:1, a profundidade de campo é milimétrica!
- Mostra o efeito do **f/22** mantendo incisivos, caninos e molares cravados no foco, contra o desfoque severo do **f/2.8** (< 1mm).

### 5. 💡 Iluminação & Flash Odontológico
- **Twin Flash**: Iluminação bilateral com sombras sutis para textura e relevo vestibular.
- **Flash de Estúdio (Softbox / Stripbox)**: Iluminação nobre e difusa, criando reflexos contínuos e suaves nas arestas de transição, muito utilizado em odontologia estética artística e cursos de alto padrão.
- **Ring Flash**: Luz circular uniforme sem sombras, ideal para ortodontia e oclusal.
- **Sem Flash**: Luz ambiente da clínica, gerando amarelamento e subexposição.

### 6. 🎨 Balanço de Branco (WB - Temperatura de Cor)
- **⚡ Flash (5500K)**: Padrão Ouro Odontológico — luz neutra calibrada, essencial para tomada de cor com escala VITA e confecção de facetas/resinas.
- **🎯 Cartão Cinza 18%**: Calibração manual milimétrica personalizada.
- **☁️ Nublado (6500K)**: Tom quente e amarelado. Demonstra o risco de o dentista selecionar uma cor de resina mais escura que o dente real.
- **💡 Tungstênio (3200K)**: Tom frio e azulado, acinzentando o esmalte e mascarando o halo incisal.

### 7. 🦷 Cenários Clínicos Interativos
- **Estética Anterior (11 e 21)** com halo incisal e textura de esmalte.
- **Ortodontia**: Braquetes metálicos, fio ortodôntico e ligaduras elastoméricas azuis.
- **Escala de Cor VITA**: Comparação direta com a pastilha cerâmica A2.

---

## 🛠️ Tecnologias Utilizadas
- **Three.js** (Renderização WebGL 3D em tempo real com materiais PBR de esmalte dental)
- **Astro 5**
- **React 19**
- **Tailwind CSS v4**
- **Lucide Icons**
- **Web Audio API** (Sons mecânicos sintetizados em tempo real de obturador e catraca)

---

## ⚖️ Direitos Autorais e Propriedade Intelectual

Esta aplicação é propriedade exclusiva da **D-Lux Diffuser**. Todos os direitos reservados.  
Visite o catálogo oficial de difusores odontológicos em [https://dluxdiffuser.lojavirtualnuvem.com.br/](https://dluxdiffuser.lojavirtualnuvem.com.br/).

