/**
 * Function receives name, surname, email(username), password and passwordConfirmation,
 * request for a registration against the database by 
 * call-> fetch ->xhr 
 * 
 * @param {string} name 
 * @param {string} surname 
 * @param {string} email 
 * @param {string} password 
 * @param {string} passwordConfirmation 
 * @param {Function} callback 
 */
function registerUser(name, surname, email, password, passwordConfirmation, callback) {
    validate.string(name)
    validate.string.notVoid('name', name)
    validate.string(surname)
    validate.string.notVoid('surname', surname)
    validate.string(email)
    validate.string.notVoid('e-mail', email)
    validate.string(password)
    validate.string.notVoid('password', password)
    validate.string(passwordConfirmation)
    validate.string.notVoid('passwordConfirmation', passwordConfirmation)
    validate.function(callback)

    passwordConfirmation !== password ? callback(new Error('passwords do not match')) : call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password, favs: [] }, result => {
        result.error ? callback(new Error(result.error)) : callback(undefined, result);
    })
}