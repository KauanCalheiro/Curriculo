(() => {

    function createHeader() {
        const header = document.createElement('header');
        header.classList.add('header');

        const nav = document.createElement('nav');
        nav.classList.add('header__nav');

        const anchorIndex = document.createElement('a');
        anchorIndex.classList.add('header__nav__link');
        anchorIndex.href = ('index.html');
        anchorIndex.innerHTML = 'Aprensentação';

        const anchorCertificates = document.createElement('a');
        anchorCertificates.classList.add('header__nav__link');
        anchorCertificates.href = ('certificates.html');
        anchorCertificates.innerHTML = 'Certificados';

        const anchorContacts = document.createElement('a');
        anchorContacts.classList.add('header__nav__link');
        anchorContacts.href = ('contacts.html');
        anchorContacts.innerHTML = 'Contatos';

        header.appendChild(nav);
        nav.appendChild(anchorIndex);
        nav.appendChild(anchorCertificates);
        nav.appendChild(anchorContacts);

        document.body.appendChild(header);
    }

    createHeader();
})()