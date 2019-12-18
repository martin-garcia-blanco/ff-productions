describe('logic - retrieve movie', () => {
    let name, surname, email, password, id, token, cresult

    beforeEach(done => {

        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password }, result => {
            if (result.error) done(new Error(result.error))
            else {
                call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
                    if (result.error) done(new Error(result.error))
                    else {
                        const { data } = result
                        cresult = result
                        id = data.id
                        token = data.token
                        done()
                    }
                })
            }
        })
    })

    it('should throw an error because genreID is not a number', () => {

        let o = id
        expect(name).toBeDefined()

    })


    it('should retrieve movieId correctly', done => {

        let movieId = 475557
        let userToken = token
        let userID = id
        let error = cresult.error
        let result = cresult


        retrieveMovie(movieId, userToken, userID, (error, result) => {

            expect(error).toBeUndefined()
            expect(result).toBeDefined()
            expect(result.poster).toBe("https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg")
            expect(result.title).toBe("Joker")
            done()
        })

    })

    it('should use correct userID correctly', (done) => {

        let movieId = 475557
        let userToken = token
        let userID = id
        let error = cresult.error
        let result = cresult


        retrieveMovie(movieId, userToken, userID, (error, result) => {
            expect(typeof userID).toBe('string')
            expect(error).toBeUndefined()
            expect(result).toBeDefined()
            done()
        })

    })

    it('should retrieve movieId correctly', (done) => {

        let movieId = 475557
        let userToken = token
        let userID = id
        let error = cresult.error
        let result = cresult


        retrieveMovie(movieId, userToken, userID, (error, result) => {

            expect(error).toBeUndefined()
            expect(result).toBeDefined()
            expect(typeof userToken).toBe('string')
            done()
        })

    })

})