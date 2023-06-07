(() => {

    function createFooter() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        
        const p = document.createElement('p');
        p.classList.add('footer__paragraph');
        p.innerText = 'Desenvolvido por Kauan Morinel Calheiro';

        footer.appendChild(p);

        document.body.appendChild(footer);
    }

    createFooter();
})()