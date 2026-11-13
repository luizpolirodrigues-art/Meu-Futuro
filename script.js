document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".timeline-card");

    // Observador para animar os cartões conforme entram na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Adiciona um pequeno atraso entre cada cartão
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});