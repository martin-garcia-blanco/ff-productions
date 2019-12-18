/**
 * Function without parameters that should return 
 * 20 trendy movies
 * call-> fetch ->xhr 
 * @param {Function} callback 
 */
function retrieveInitialMovies(callback) {

    validate.function(callback)

    call('GET', undefined, 'https://api.themoviedb.org/3/movie/popular?api_key=5396c3e7196bcc564336e933d566130b', undefined, result => {
        if (result.status_message) { callback(new Error(result.status_message)) } else {
            result.results.forEach(element => {
                element.poster_path === null ? (element.poster_path = '../film-fest-design/img/notfound.jpeg') : element.poster_path = "https://image.tmdb.org/t/p/original/" + element.poster_path

            });
        }
        callback(undefined, result);
    })
}