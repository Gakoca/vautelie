// === ANIMAÇÃO AO ROLAR A PÁGINA ===
const secoes = document.querySelectorAll('section');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
        }
    });
}, { threshold: 0.12 });

secoes.forEach(secao => observador.observe(secao));

// === NAVEGAÇÃO SUAVE ===
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const alvo = document.querySelector(link.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// === EFEITO NOS CARDS AO PASSAR O MOUSE ===
document.querySelectorAll('.cartao, .cartao-membro').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s ease-out';
    });
});