/**
 * 
 * Function receives userId, userToken movieId and callback,
 * if movie with specific movieId is favourite into user change to
 * not favourite or vice versa
 * implements
 * call-> fetch ->xhr 
 * @param {string} userId 
 * @param {string} userToken 
 * @param {number} movieId 
 * @param {Function} callback 
 */
function toggleFavMovie(userId, userToken, movieId, callback) {
    validate.string(userId)
    validate.string.notVoid('userId', userId)
    validate.string(userToken)
    validate.string.notVoid('userToken', userToken)
    validate.number(movieId)
    validate.function(callback)

    call('GET', userToken, 'https://skylabcoders.herokuapp.com/api/user/' + userId, undefined, (result) => {
        if (result.error) {
            callback(new Error(result.error));
        } else {
            let favArray = []
            if (result.data.favs) {
                favArray = result.data.favs
            }
            favArray.includes(movieId) ? favArray.splice(favArray.indexOf(movieId), 1) : favArray.push(movieId)

            const body = { 'favs': favArray }

            call('PUT', userToken, 'https://skylabcoders.herokuapp.com/api/user/' + userId, body, (result) => {

                if (result.error) {
                    callback(new Error(result.error));
                } else {
                    callback(result)
                }
            });

        }
    });


}