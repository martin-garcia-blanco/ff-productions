describe('logic - register user', () => {
    let name, surname, email, password, passwordConfirmation

    beforeEach(() => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
        passwordConfirmation = password
    })

    it('should succeed on correct credentials', done => {
        registerUser(name, surname, email, password, passwordConfirmation, (error, response) => {
            expect(error).toBeUndefined()
            expect(response).toBeDefined()

            done()
        })
    })

    describe('when user already exists', () => {
        beforeEach(done => {
            call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password }, result => {

                if (result.error) done(new Error(result.error))
                else done()
            })
        })

        it('should fail on already existing user', done => {
            registerUser(name, surname, email, password, password, (error, response) => {
                expect(response).toBeUndefined()
                expect(error).toBeDefined()

                expect(error.message).toBeDefined()
                expect(typeof error.message).toBe('string')
                expect(error.message.length).toBeGreaterThan(0)

                done()
            })

        })
    })

    it('should fail on incorrect name, surname, email, password, or expression type and content', () => {
        expect(() => registerUser(1)).toThrowError(TypeError, '1 is not a string')
        expect(() => registerUser(true)).toThrowError(TypeError, 'true is not a string')
        expect(() => registerUser([])).toThrowError(TypeError, ' is not a string')
        expect(() => registerUser({})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => registerUser(undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => registerUser(null)).toThrowError(TypeError, 'null is not a string')

        expect(() => registerUser('')).toThrowError(ContentError, 'name is empty or blank')
        expect(() => registerUser(' \t\r')).toThrowError(ContentError, 'name is empty or blank')

        expect(() => registerUser(name, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => registerUser(name, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => registerUser(name, [])).toThrowError(TypeError, ' is not a string')
        expect(() => registerUser(name, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => registerUser(name, '')).toThrowError(ContentError, 'surname is empty or blank')
        expect(() => registerUser(name, ' \t\r')).toThrowError(ContentError, 'surname is empty or blank')

        expect(() => registerUser(name, surname, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, [])).toThrowError(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, '')).toThrowError(ContentError, 'e-mail is empty or blank')
        expect(() => registerUser(name, surname, ' \t\r')).toThrowError(ContentError, 'e-mail is empty or blank')

        expect(() => registerUser(name, surname, email, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, email, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, email, [])).toThrowError(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, email, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, email, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, email, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, email, '')).toThrowError(ContentError, 'password is empty or blank')
        expect(() => registerUser(name, surname, email, ' \t\r')).toThrowError(ContentError, 'password is empty or blank')

        expect(() => registerUser(name, surname, email, password, password, 1)).toThrowError(TypeError, '1 is not a function')
        expect(() => registerUser(name, surname, email, password, password, true)).toThrowError(TypeError, 'true is not a function')
        expect(() => registerUser(name, surname, email, password, password, [])).toThrowError(TypeError, ' is not a function')
        expect(() => registerUser(name, surname, email, password, password, {})).toThrowError(TypeError, '[object Object] is not a function')
        expect(() => registerUser(name, surname, email, password, password, undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => registerUser(name, surname, email, password, password, null)).toThrowError(TypeError, 'null is not a function')
    })

    // TODO other cases
})