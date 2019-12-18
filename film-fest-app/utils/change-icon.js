function changeIcon() {
    const img1 = "../film-fest-design/img/plus32px.png"
    const img2 = "../film-fest-design/img/success32px.png"
    let imgElement = document.getElementById('watchlist')

    imgElement.src = (imgElement.src === img1) ? img2 : img1
}