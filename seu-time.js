const timeNBA = localStorage.getItem('timeNBA')
const timeNBB = localStorage.getItem('timeNBB')

const titulo = document.getElementById('titulo-times')
titulo.innerHTML = `🏀 ${timeNBA} & ${timeNBB}`

fetch('./noticias.json')
    .then(resposta => resposta.json())
    .then(dados => {
        const grid = document.getElementById('noticias-time')

        const filtradas = dados.articles.filter(noticia => 
            noticia.title && 
            noticia.title !== '[Removed]' &&
            (noticia.title.includes(timeNBA) || 
             noticia.title.includes(timeNBB) ||
             noticia.description?.includes(timeNBA) ||
             noticia.description?.includes(timeNBB))
        )

        if (filtradas.length === 0) {
            grid.innerHTML = '<p>Nenhuma notícia encontrada para seus times.</p>'
            return
        }

        filtradas.forEach(noticia => {
            grid.innerHTML += `
                <article class="noticia-card">
                    <a href="${noticia.url}" target="_blank" class="noticia-link">
                        <div class="noticia-conteudo">
                            <span class="noticia-tag">${timeNBA} / ${timeNBB}</span>
                            <h3 class="titulo-noticia">${noticia.title}</h3>
                            <p class="subtitulo-noticia">${noticia.description}</p>
                            <span class="noticia-data">${new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}</span>
                        </div>
                    </a>
                </article>
            `
        })
    })