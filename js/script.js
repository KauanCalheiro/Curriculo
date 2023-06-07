const github = document.querySelector('.github');
const githubImg =  document.querySelector('#git')
const linkedin = document.querySelector('.linkedin');
const linkedinImg =  document.querySelector('#linkedin')
const whatsapp = document.querySelector('.whatsapp');
const whatsappImg =  document.querySelector('#whatsapp')


github.addEventListener('mouseover', () => {
    githubImg.setAttribute('src', './assets/github-hover.png');
    github.style.color ='var(--github-hover-color)';
})

github.addEventListener('mouseout', () => {
    githubImg.setAttribute('src', './assets/github.png');
    github.style.color ='var(--first-color)';
})

linkedin.addEventListener('mouseover', () => {
    linkedinImg.setAttribute('src', './assets/linkedin-hover.png');
    linkedin.style.color = 'var(--linkedin-hover-color)';
})

linkedin.addEventListener('mouseout', () => {
    linkedinImg.setAttribute('src', './assets/linkedin.png');
    linkedin.style.color ='var(--first-color)';
})

whatsapp.addEventListener('mouseover', () => {
    whatsappImg.setAttribute('src', './assets/whatsapp-hover.png');
    whatsapp.style.color = 'var(--whatsapp-hover-color)';
})

whatsapp.addEventListener('mouseout', () => {
    whatsappImg.setAttribute('src', './assets/whatsapp.png');
    whatsapp.style.color = 'var(--first-color)';
})