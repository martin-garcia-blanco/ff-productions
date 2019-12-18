function changeIcon() {
    var img1 = "../film-fest-design/img/plus32px.png",
        img2 = "../film-fest-design/img/success32px.png";

    var imgElement = document.getElementById('watchlist');

    imgElement.src = (imgElement.src === img1) ? img2 : img1;
}