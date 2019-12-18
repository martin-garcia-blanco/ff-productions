/**
 * Function receives anmovieId, userId, userToken,
 * request for a specific movie against the theMovieDB and looks for match
 * into userApi  by 
 * call-> fetch ->xhr 
 * 
 * @param {number} movieId 
 * @param {string} userToken 
 * @param {string} userID 
 * @param {function} callback 
 */
function retrieveMovie(movieId, userToken, userID, callback) {
    validate.number(movieId)

    const apiKey = '5396c3e7196bcc564336e933d566130b'


    call('GET', undefined, `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, undefined, result => {
        if (result.status_message) {
            callback(new Error(result.status_message))
        } else {

            if (userID && userToken) {
                validate.string(userID)
                validate.string.notVoid('userID', userID)
                validate.string(userToken)
                validate.string.notVoid('userToken', userToken)

                call('GET', userToken, 'https://skylabcoders.herokuapp.com/api/user/' + userID, undefined, (user) => {
                    if (user.error) {
                        callback(new Error(user.error));
                    } else {

                        let movie = {}
                        movie.id = movieId
                        result.poster_path === null ? (movie.poster = '../film-fest-design/img/notfound.jpeg') : movie.poster = "https://image.tmdb.org/t/p/original" + result.poster_path
                        result.original_title ? movie.title = result.original_title : movie.title = 'No info, sorry'
                        result.overview ? movie.description = result.overview : movie.description = 'No info, sorry'
                        if (result.genres) {
                            movie.genre = ""
                            result.genres.forEach(element => {
                                movie.genre += element.name + " - "
                            });
                        } else {
                            movie.genre = "No info, sorry"
                        }
                        result.runtime ? movie.runtime = result.runtime : movie.runtime = 'No info, sorry'
                        result.vote_average ? movie.vote_average = result.vote_average : movie.vote_average = 'No info, sorry'

                        if (user.data.favs) {
                            if (user.data.favs.includes(result.id)) {
                                movie.fav = true
                            } else {
                                movie.fav = false
                            }
                        } else {
                            movie.fav = false
                        }
                        callback(undefined, movie)
                    }
                })

            } else {

                let movie = {};
                movie.id = movieId
                result.poster_path === null ? (movie.poster = '../film-fest-design/img/notfound.jpeg') : movie.poster = "https://image.tmdb.org/t/p/original" + result.poster_path


                result.original_title ? movie.title = result.original_title : movie.title = 'No info, sorry'
                result.overview ? movie.description = result.overview : movie.description = 'No info, sorry'
                if (result.genres) {
                    movie.genre = ""
                    result.genres.forEach(element => {
                        movie.genre += element.name + " - "
                    });
                } else {
                    movie.genre = "No info, sorry"
                }
                result.runtime ? movie.runtime = result.runtime : movie.runtime = 'No info, sorry'
                result.vote_average ? movie.vote_average = result.vote_average : movie.vote_average = 'No info, sorry'
                callback(undefined, movie)
            }
        }
    })
}