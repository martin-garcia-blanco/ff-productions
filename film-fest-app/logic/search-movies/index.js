/**
 * 
 * Function receives query and callback,
 * request for an array of movies matching with the query
 * that match is on theMovieDB database 
 * call-> fetch ->xhr 
 * @param {string} searchQuery 
 * @param {function} callback 
 */
function searchMovies(searchQuery, callback) {
    validate.function(callback)
    validate.string(searchQuery)
    call('GET', undefined, `https://api.themoviedb.org/3/search/movie?api_key=5396c3e7196bcc564336e933d566130b&language=en-US&query=${searchQuery}&page=1&include_adult=false`, undefined, result => {

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