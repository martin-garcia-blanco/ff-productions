/**
 * 
 * Function receives name, surname, email(username), password, 
 * passwordConfirmation, id, token and callback,
 * 
 * function should make a put into db by user API Rest, on a user 
 * with specific id and token, put is gonna overwrite the specific fields
 * 
 * implements
 * call-> fetch ->xhr 
 * @param {string} name 
 * @param {string} surname 
 * @param {string} email 
 * @param {string} password 
 * @param {string} passwordConfirmation 
 * @param {string} id 
 * @param {string} token 
 * @param {Function} callback 
 */
function updateUser(name, surname, email, password, passwordConfirmation, id, token, callback) {

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
    validate.string(id)
    validate.string.notVoid('id', id)
    validate.string(token)
    validate.string.notVoid('token', token)
    validate.function(callback)

    passwordConfirmation !== password ? callback(new Error('password do not match')) : call('PUT', token, 'https://skylabcoders.herokuapp.com/api/user/' + id, { name, surname, username: email, password }, result => {

        result.error ? callback(new Error(result.error)) : callback(undefined, result.data)

    })

}