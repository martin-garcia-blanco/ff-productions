/**
 * Function receives userId, userToken and callback,
 * request for an array of movies into a user watchlist against the database by 
 * call-> fetch ->xhr 
 * @param {string} userId 
 * @param {string} userToken 
 * @param {function} callback 
 */
function retrieveWatchlistMovies(userId, userToken, callback) {
    validate.string(userId)
    validate.string(userToken)
    validate.function(callback)

    const apiKey = '5396c3e7196bcc564336e933d566130b'


    call('GET', userToken, `https://skylabcoders.herokuapp.com/api/user/${userId}`, undefined, result => {
        if (result.error) {
            callback(new Error(result.error))
        } else {
            if (result.data.favs.length) {
                const favArray = result.data.favs
                let favMovies = []

                favArray.forEach(element => {

                    call('GET', undefined, `https://api.themoviedb.org/3/movie/${element}?api_key=${apiKey}`, undefined, movieResult => {
                        if (result.status_message) {
                            callback(new Error(result.status_message))
                        } else {

                            let movie = {}
                            movie.id = element + ''
                            movieResult.poster_path === null ? (movie.poster = '../film-fest-design/img/notfound.jpeg') : movie.poster = "https://image.tmdb.org/t/p/original" + movieResult.poster_path
                            movieResult.original_title ? movie.title = movieResult.original_title : movie.title = 'No info, sorry'
                            movieResult.overview ? movie.description = movieResult.overview : movie.description = 'No info, sorry'
                            if (movieResult.genres) {
                                movie.genre = ""
                                movieResult.genres.forEach(element => {
                                    movie.genre += element.name + " - "
                                });
                            } else {
                                movie.genre = "No info, sorry"
                            }
                            movieResult.runtime ? movie.runtime = movieResult.runtime : movie.runtime = 'No info, sorry'
                            movieResult.vote_average ? movie.vote_average = movieResult.vote_average : movie.vote_average = 'No info, sorry'

                            movie.fav = true
                            favMovies.push(movie)

                            callback(undefined, favMovies)
                        }

                    })

                })

            } else {
                callback(undefined, [])
            }
        }
    })
}