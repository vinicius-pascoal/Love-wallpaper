# LOVE - Wallpaper Digital Interativo

Interpretação digital interativa da escultura "LOVE" de **Alexander Milov**, criada com HTML, CSS e JavaScript.

## 📱 Descrição

Este projeto é um wallpaper digital que representa a famosa escultura LOVE através de:

- **Children** (crianças): Imagem base que representa as crianças sentadas
- **Frame** (moldura/mãos): Sobreposto às crianças, representando as mãos que as abraçam

A composição busca transmitir a essência da obra original: o tema do amor, parentalidade e proteção.

## ✨ Características

- ✅ **Fundo gradiente animado** com cores que mudam suavemente
- ✅ **Efeito 3D ao mover o mouse** - a escultura segue o cursor
- ✅ **Animações flutuantes** para children e frame em sincronia
- ✅ **Partículas flutuantes** que caem continuamente (efeito neve/sparkles)
- ✅ **Pulso de luz** ao clicar na escultura
- ✅ **Responsive design** - funciona em smartphones, tablets e desktops
- ✅ **Modo tela cheia** - esconde informações para melhor visualização
- ✅ **Sombras dinâmicas** que intensificam ao hover

## 📂 Estrutura dos Arquivos

```
Love-wallpaper/
├── index.html       # Estrutura HTML principal
├── style.css        # Estilos e animações CSS
├── script.js        # Interatividades JavaScript
├── imgs/
│   ├── children.png # Imagem base (crianças)
│   └── frame.png    # Imagem sobreposta (mãos)
└── README.md        # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir localmente
1. Clone o repositório ou baixe os arquivos
2. Abra `index.html` no navegador
3. Aproveite a interatividade!

### Opção 2: Servidor local (recomendado)
```bash
# Navegue até a pasta do projeto
cd Love-wallpaper

# Python 3.x
python -m http.server 8000

# Node.js (com http-server)
npx http-server

# Depois acesse: http://localhost:8000
```

## 🎮 Interatividades

| Ação | Efeito |
|------|--------|
| **Mover o mouse** | A escultura segue o cursor em 3D |
| **Clicar** | Cria um pulso de luz expansiva |
| **Hover sobre a escultura** | Intensifica a sombra |
| **F11** | Ativa tela cheia (esconde informações) |
| **Console do browser** | Mensagem personalizada |

## 🎨 Customização

### Alterar cores do fundo
Edite o `style.css` e modifique a seção:
```css
.background {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}
```

### Ajustar velocidade das animações
Modifique os valores de `animation-duration` no CSS:
```css
animation: floatChildren 6s ease-in-out infinite; /* 6s = velocidade */
```

### Mudar número de partículas
Edit `script.js`:
```javascript
const particleCount = 50; // Aumente ou diminua este valor
```

## 📊 Compatibilidade

- ✅ Chrome/Chromium (88+)
- ✅ Firefox (85+)
- ✅ Safari (14+)
- ✅ Edge (88+)
- ✅ Mobile browsers (moderna standards)

## 🎬 Sobre a Escultura Original

**LOVE** é uma instalação colossal de **Alexander Milov**, em fibra de vidro, que simboliza:
- 👨‍👩‍👧‍👦 A conexão entre pais e filhos
- 💕 O amor incondicional
- 🤝 A proteção e cuidado

A versão digital mantém esses elementos através da sobreposição das imagens.

## 📝 Licença

Criado como homenagem à obra de Alexander Milov.

## 👨‍💻 Desenvolvedor

Criado com ❤️ como projeto educativo de web design e CSS animations.

---

**Divirta-se explorando a interpetação digital de LOVE!** ✨
