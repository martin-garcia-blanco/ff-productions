/**
 * Function receives a genreId and should return an
 * array of movies mathced by genre 
 * call-> fetch ->xhr 
 * 
 * @param {number} genreID 
 * @param {Function} callback 
 */
function retrieveGenreIdMovies(genreID, callback) {
    validate.number(genreID)
    validate.function(callback)

    call('GET', undefined, `https://api.themoviedb.org/3/discover/movie?api_key=5396c3e7196bcc564336e933d566130b&with_genres=${genreID}`, undefined, result => {

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