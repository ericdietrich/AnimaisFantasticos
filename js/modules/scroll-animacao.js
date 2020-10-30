export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    sections[0].classList.add('ativo');
    const windowMetade = window.innerHeight * 0.6;

    if (sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisibble = (sectionTop - windowMetade) < 0;
                if (isSectionVisibble) {
                    section.classList.add('ativo');
                }
                else if (section.classList.contains('ativo')) {
                    section.classList.remove('ativo');
                }
            });
        }

        window.addEventListener('scroll', animaScroll);
    }
}