/**
 * Function receives an email(username) and a password,
 * request for a authentication against the database by 
 * call-> fetch ->xhr 
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {Function} callback 
 */
function authenticateUser(email, password, callback) {
    validate.string(email)
    validate.string.notVoid('e-mail', email)
    validate.string(password)
    validate.string.notVoid('password', password)

    validate.function(callback)

    call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
        result.error ? callback(new Error(result.error)) : callback(undefined, result.data)
    })
}