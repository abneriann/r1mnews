const hamburguer = document.getElementById('hamburguer')
const navList = document.getElementById('nav-list')

hamburguer.addEventListener('click', () => {
    navList.classList.toggle('aberto')
})

fetch('./noticias.json')
    .then(resposta => {
        if (!resposta.ok) throw new Error('JSON não encontrado')
        return resposta.json()
    })
    .then(dados => exibirNoticias(dados.articles))
    .catch(erro => {
        console.error('Não foi possível carregar as notícias:', erro)
        const grid = document.getElementById('noticias-grid')
        grid.innerHTML = '<p>As notícias estão temporariamente indisponíveis.</p>'
    })

function exibirNoticias(articles = []) {
    const grid = document.getElementById('noticias-grid')

    articles.slice(0, 12).forEach(noticia => {
        if (!noticia.title || noticia.title === '[Removed]') return

        grid.innerHTML += `
            <article class="noticia-card">
                <a href="${noticia.url}" target="_blank" rel="noopener noreferrer" class="noticia-link">
                    <div class="noticia-conteudo">
                        <span class="noticia-tag">NBA/NBB</span>
                        <h3 class="titulo-noticia">${noticia.title}</h3>
                        <p class="subtitulo-noticia">${noticia.description ?? ''}</p>
                        <span class="noticia-data">${new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}</span>
                    </div>
                </a>
            </article>
        `
    })
}

let timeNBASelecionado = false

document.querySelectorAll('.lista-times li').forEach(li => {
    li.addEventListener('click', () => {
        const timeEscolhido = li.querySelector('span').textContent.trim()

        if (!localStorage.getItem('timeNBA') && !timeNBASelecionado) {
            localStorage.setItem('timeNBA', timeEscolhido)
            timeNBASelecionado = true
            alert(`Time NBA escolhido: ${timeEscolhido}`)
        } else if (!localStorage.getItem('timeNBB')) {
            localStorage.setItem('timeNBB', timeEscolhido)
            alert(`Time NBB escolhido: ${timeEscolhido}`)
            window.location.href = 'seu-time.html'
        }
    })
})

const linkSeuTime = document.getElementById('link-seu-time')

linkSeuTime.addEventListener('click', (e) => {
    if (localStorage.getItem('timeNBA') && localStorage.getItem('timeNBB')) {
        e.preventDefault()
        window.location.href = 'seu-time.html'
    }
})
