describe('retrieveWatchList test', () => {
    let name, surname, email, password, passwordConfimation, id, token

    beforeEach(done => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
        passwordConfimation = password

        //user is forced to has fav movies
        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password, favs: [420818, 245891] }, result => {
            done()
        })
    })

    beforeEach(done => {
        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
            debugger
            id = result.data.id
            token = result.data.token
            done()
        })
    })

    it('Should succeed on correct specs', (done) => {
        retrieveWatchlistMovies(id, token, (error, movies) => {
            console.log(movies)
            expect(error).toBeUndefined()
            expect(movies instanceof Array).toBeTruthy()
            movies.forEach(element => {
                expect(typeof element.title == 'string').toBeTruthy()
                expect(element.title.length > 0).toBeTruthy()

                expect(typeof element.description == 'string').toBeTruthy()
                expect(element.description.length > 0).toBeTruthy()

                expect(typeof element.genre == 'string').toBeTruthy()
                expect(element.genre.length > 0).toBeTruthy()

                expect(typeof element.id == 'string').toBeTruthy()
                expect(element.id.length > 0).toBeTruthy()

                expect(typeof element.runtime == 'number').toBeTruthy()
                expect(element.runtime > 0).toBeTruthy()

                expect(typeof element.vote_average == 'number').toBeTruthy()
                expect(element.vote_average > 0).toBeTruthy()

                expect(typeof element.title == 'string').toBeTruthy()
                expect(element.title.length > 0).toBeTruthy()

                expect(typeof element.title == 'string').toBeTruthy()
                expect(element.title.length > 0).toBeTruthy()
            })
            done()
        })

    })



    //user is forced to hasn't fav movies
    beforeEach(done => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
        passwordConfimation = password
        debugger


        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password, favs: [] }, result => {

            done()
        })
        debugger


    })

    beforeEach(done => {

        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
            debugger
            id = result.data.id
            token = result.data.token
            done()

        })
    })

    it('Should succeed on correct specs', (done) => {
        retrieveWatchlistMovies(id, token, (error, movies) => {
            console.log(movies)
            expect(error).toBeUndefined()
            expect(movies instanceof Array).toBeTruthy()
            done()
        })

    })





})