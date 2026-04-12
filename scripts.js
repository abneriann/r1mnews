const noticias = [
    {
        tag: "NBA",
        titulo: "Cooper Flag anota 51 pontos",
        descricao: "Com 6 rebotes e 3 assists. ELE TEM MENOS DE 20 ANOS!",
        data: "10 de Abril de 2026"
    },
    {
        tag: "NBA",
        titulo: "Gui Santos é o melhor do mundo",
        descricao: "O Brasileiro vem amassando a liga nos últimos tempos.",
        data: "10 de Abril de 2026"
    }
]

const grid = document.getElementById('noticias-grid')

noticias.forEach(noticia => {
    grid.innerHTML += `
        <article class="noticia-card">
            <div class="noticia-conteudo">
                <span class="noticia-tag">${noticia.tag}</span>
                <h3 class="titulo-noticia">${noticia.titulo}</h3>
                <p class="subtitulo-noticia">${noticia.descricao}</p>
                <span class="noticia-data">${noticia.data}</span>
            </div>
        </article>
    `
})