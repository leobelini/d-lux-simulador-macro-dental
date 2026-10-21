# 📸 Simulador de Fotografia Macro Odontológica (Astro + React)

Um simulador interativo projetado para dentistas e fotógrafos odontológicos, ensinando de forma prática, visual e dinâmica os fundamentos da fotografia macro intraoral.

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ (ou v20/v24)
- npm ou pnpm

### Instalação e Execução
```bash
# Instalar dependências (caso ainda não tenha feito)
npm install

# Iniciar servidor de desenvolvimento local
npm run dev

# Ou para compilar a versão de produção
npm run build
npm run preview
```

O aplicativo estará disponível em `http://localhost:4321`.

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
- **Ring Flash**: Luz circular uniforme sem sombras, ideal para ortodontia e oclusal.
- **Sem Flash**: Luz ambiente da clínica, gerando amarelamento e subexposição.

### 6. 🦷 Cenários Clínicos Interativos
- **Estética Anterior (11 e 21)** com halo incisal e textura de esmalte.
- **Ortodontia**: Braquetes metálicos, fio ortodôntico e ligaduras elastoméricas azuis.
- **Escala de Cor VITA**: Comparação direta com a pastilha cerâmica A2.

---

## 🛠️ Tecnologias Utilizadas
- **Astro 5**
- **React 19**
- **Tailwind CSS v4**
- **Lucide Icons**
- **Web Audio API** (Sons mecânicos sintetizados em tempo real de obturador e catraca)
- **Canvas Confetti**
