const hamburguer = document.getElementById('hamburguer')
const navList = document.getElementById('nav-list')

hamburguer.addEventListener('click', () => {
    navList.classList.toggle('aberto')
})

fetch('./noticias.json')
    .then(resposta => resposta.json())
    .then(dados => {
        const grid = document.getElementById('noticias-grid')
        
        dados.articles.slice(0, 12).forEach(noticia => {
           grid.innerHTML += `
    <article class="noticia-card">
        <a href="${noticia.url}" target="_blank" class="noticia-link">
            <div class="noticia-conteudo">
                <span class="noticia-tag">NBA/NBB</span>
                <h3 class="titulo-noticia">${noticia.title}</h3>
                <p class="subtitulo-noticia">${noticia.description}</p>
                <span class="noticia-data">${new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}</span>
            </div>
        </a>
    </article>
            `
        })
    })