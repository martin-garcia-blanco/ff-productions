/**
 * Function without parameters,
 * request for an array of random movies against the database by 
 * call-> fetch ->xhr 
 * @param {Function} callback 
 */
function retrieveRandomMovies(callback) {
    validate.function(callback)

    const page = Math.floor(Math.random() * 100)
    const apiKey = "5396c3e7196bcc564336e933d566130b"
    call('GET', undefined, `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en&page=${page}&vote_average.gte=6.9`, undefined, result => {
        if (result.status_message) {
            callback(new Error(result.status_message))
        } else {
            result.results.forEach(element => {
                element.poster_path === null ? (element.poster_path = '../film-fest-design/img/notfound.jpeg') : element.poster_path = "https://image.tmdb.org/t/p/original/" + element.poster_path
            });
            callback(undefined, result)
        }
    })
}