// Gerar partículas saindo das crianças
function createParticles() {
  const sculptureWrapper = document.querySelector('.sculpture-wrapper');
  const particlesContainer = document.querySelector('.particles');
  const particleCount = 30;

  if (!sculptureWrapper) return;

  const rect = sculptureWrapper.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 4 + 2;
    const delay = Math.random() * 2;
    const duration = Math.random() * 3 + 2;

    // Calcular ângulo radial para as partículas saírem em todas as direções
    const angle = (Math.random() * Math.PI * 2);
    const distance = Math.random() * 300 + 100;

    const endX = Math.cos(angle) * distance;
    const endY = Math.sin(angle) * distance;

    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = centerX + 'px';
    particle.style.top = centerY + 'px';
    particle.style.animationDelay = delay + 's';
    particle.style.animationDuration = duration + 's';
    particle.style.setProperty('--endX', endX + 'px');
    particle.style.setProperty('--endY', endY + 'px');

    particlesContainer.appendChild(particle);

    // Remover a partícula após a animação terminar
    setTimeout(() => {
      particle.remove();
    }, (duration + delay) * 1000);
  }

  // Criar novas partículas continuamente
  setTimeout(createParticles, 500);
}

// Efeito de mouse na escultura
document.addEventListener('DOMContentLoaded', () => {
  const sculptureWrapper = document.querySelector('.sculpture-wrapper');
  const frame = document.querySelector('.frame');
  const children = document.querySelector('.children');
  const wallpaperContainer = document.querySelector('.wallpaper-container');

  // Iniciar partículas
  createParticles();

  // Efeito 3D ao mover o mouse
  document.addEventListener('mousemove', (e) => {
    const rect = sculptureWrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angleX = (e.clientY - centerY) / 100;
    const angleY = (e.clientX - centerX) / 100;

    frame.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    children.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${angleX * 0.5}deg) rotateY(${angleY * 0.5}deg)`;
  });

  // Resetar posição ao sair
  document.addEventListener('mouseleave', () => {
    frame.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg)';
    children.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });

  // Efeito de clique - pulso
  sculptureWrapper.addEventListener('click', (e) => {
    // Criar pulso de luz
    const pulse = document.createElement('div');
    pulse.style.position = 'absolute';
    pulse.style.width = '30px';
    pulse.style.height = '30px';
    pulse.style.borderRadius = '50%';
    pulse.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)';
    pulse.style.pointerEvents = 'none';
    pulse.style.left = (e.clientX - wallpaperContainer.getBoundingClientRect().left) + 'px';
    pulse.style.top = (e.clientY - wallpaperContainer.getBoundingClientRect().top) + 'px';
    pulse.style.transform = 'translate(-50%, -50%)';
    pulse.style.animation = 'expansionPulse 0.6s ease-out forwards';
    pulse.style.zIndex = '8';

    wallpaperContainer.appendChild(pulse);

    setTimeout(() => {
      pulse.remove();
    }, 600);
  });

  // Adicionar animação de expansão ao CSS dinamicamente
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
        @keyframes expansionPulse {
            0% {
                width: 30px;
                height: 30px;
                opacity: 1;
            }
            100% {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(styleSheet);

  // Informações no console
  console.log('%cLOVE - Alexander Milov', 'font-size: 24px; font-weight: bold; color: #667eea;');
  console.log('%cEscultura Digital Interativa', 'font-size: 14px; color: #764ba2;');
  console.log('%cExplorando o amor, conectando os corações...', 'font-size: 12px; color: #f093fb; font-style: italic;');
});

// Detectar modo escuro do sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.style.filter = 'brightness(0.9)';
}

// Esconder UI ao fazer fullscreen
document.addEventListener('fullscreenchange', () => {
  const info = document.querySelector('.info');
  if (document.fullscreenElement) {
    info.style.display = 'none';
  } else {
    info.style.display = 'block';
  }
});
