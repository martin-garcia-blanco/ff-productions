describe('UpdateUser test', () => {
    let name, surname, email, password, id, token


    beforeEach(done => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
        passwordConfimation = password

        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password }, result => {
            if (result.error) done(new Error(result.error))
            else done()
        })
    })

    beforeEach(done => {
        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
            if (result.error) done(new Error(result.error))
            else {
                id = result.data.id
                token = result.data.token
                done()
            }
        })
    })


    it('Should change values correctly', done => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
        passwordConfimation = password
        updateUser(name, surname, email, password, passwordConfimation, id, token, (error, result) => {
            expect(error).toBeUndefined()
            done()
        })

    })



    it('should fail on incorrect name, surname, email, password, or expression type and content', () => {
        expect(() => updateUser(1)).toThrowError(TypeError, '1 is not a string')
        expect(() => updateUser(true)).toThrowError(TypeError, 'true is not a string')
        expect(() => updateUser([])).toThrowError(TypeError, ' is not a string')
        expect(() => updateUser({})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => updateUser(undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => updateUser(null)).toThrowError(TypeError, 'null is not a string')

        expect(() => updateUser('')).toThrowError(ContentError, 'name is empty or blank')
        expect(() => updateUser(' \t\r')).toThrowError(ContentError, 'name is empty or blank')

        expect(() => updateUser(name, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => updateUser(name, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => updateUser(name, [])).toThrowError(TypeError, ' is not a string')
        expect(() => updateUser(name, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => updateUser(name, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => updateUser(name, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => updateUser(name, '')).toThrowError(ContentError, 'surname is empty or blank')
        expect(() => updateUser(name, ' \t\r')).toThrowError(ContentError, 'surname is empty or blank')

        expect(() => updateUser(name, surname, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => updateUser(name, surname, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => updateUser(name, surname, [])).toThrowError(TypeError, ' is not a string')
        expect(() => updateUser(name, surname, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => updateUser(name, surname, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => updateUser(name, surname, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => updateUser(name, surname, '')).toThrowError(ContentError, 'e-mail is empty or blank')
        expect(() => updateUser(name, surname, ' \t\r')).toThrowError(ContentError, 'e-mail is empty or blank')

        expect(() => updateUser(name, surname, email, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => updateUser(name, surname, email, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => updateUser(name, surname, email, [])).toThrowError(TypeError, ' is not a string')
        expect(() => updateUser(name, surname, email, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => updateUser(name, surname, email, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => updateUser(name, surname, email, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => updateUser(name, surname, email, '')).toThrowError(ContentError, 'password is empty or blank')
        expect(() => updateUser(name, surname, email, ' \t\r')).toThrowError(ContentError, 'password is empty or blank')

        expect(() => updateUser(name, surname, email, password, password, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => updateUser(name, surname, email, password, password, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => updateUser(name, surname, email, password, password, [])).toThrowError(TypeError, ' is not a string')
        expect(() => updateUser(name, surname, email, password, password, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => updateUser(name, surname, email, password, password, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => updateUser(name, surname, email, password, password, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => updateUser(name, surname, email, password, password, id, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => updateUser(name, surname, email, password, password, id, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => updateUser(name, surname, email, password, password, id, [])).toThrowError(TypeError, ' is not a string')
        expect(() => updateUser(name, surname, email, password, password, id, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => updateUser(name, surname, email, password, password, id, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => updateUser(name, surname, email, password, password, id, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => updateUser(name, surname, email, password, password, id, token, 1)).toThrowError(TypeError, '1 is not a function')
        expect(() => updateUser(name, surname, email, password, password, id, token, true)).toThrowError(TypeError, 'true is not a function')
        expect(() => updateUser(name, surname, email, password, password, id, token, [])).toThrowError(TypeError, ' is not a function')
        expect(() => updateUser(name, surname, email, password, password, id, token, {})).toThrowError(TypeError, '[object Object] is not a function')
        expect(() => updateUser(name, surname, email, password, password, id, token, undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => updateUser(name, surname, email, password, password, id, token, null)).toThrowError(TypeError, 'null is not a function')
    })
})