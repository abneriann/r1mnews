const timeNBA = localStorage.getItem('timeNBA')
const timeNBB = localStorage.getItem('timeNBB')

const titulo = document.getElementById('titulo-times')
titulo.innerHTML = `🏀 ${timeNBA} & ${timeNBB}`

const API_KEY = "0687886634164f7ab741ad31890fbbb6"
const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(timeNBA)} OR "${encodeURIComponent(timeNBB)} basquete"&sortBy=publishedAt&apiKey=${API_KEY}`

fetch(url)
    .then(resposta => resposta.json())
    .then(dados => {
        const grid = document.getElementById('noticias-time')

        if (dados.articles.length === 0) {
            grid.innerHTML = '<p>Nenhuma notícia encontrada para seus times.</p>'
            return
        }
            

        dados.articles.slice(0, 21).forEach(noticia => {
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
