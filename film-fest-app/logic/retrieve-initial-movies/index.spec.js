describe('retrieve Initial movies', () => {

    it('should retrieve movies correctly', done => {

        retrieveInitialMovies((error, result) => {
            expect(error).toBeUndefined()
            expect(result).toBeDefined()
            expect(result.results instanceof Array).toBeTruthy()

            expect(result.results.lenght === 20).toBeFalsy()

            result.results.forEach(element => {
                expect(element.poster_path).toBeDefined()
                expect(element.title).toBeDefined()
                expect(element.id).toBeDefined()

                expect(typeof element.id === 'number').toBeTruthy()
                expect(typeof element.poster_path === 'string').toBeTruthy()
                expect(typeof element.title === 'string').toBeTruthy()
            });
            done()
        })
    })


    it('should throw an error because ID is not a number', () => {
        const id = undefined
        const callback = function () { return null }

        expect(() => retrieveInitialMovies(id, callback)).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveInitialMovies(true)).toThrowError(TypeError, 'true is not a function')
        expect(() => retrieveInitialMovies([])).toThrowError(TypeError, ' is not a function')
        expect(() => retrieveInitialMovies({})).toThrowError(TypeError, '[object Object] is not a function')
        expect(() => retrieveInitialMovies(undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => retrieveInitialMovies(null)).toThrowError(TypeError, 'null is not a function')
    })


    it('should throw an error because callback is not a function', () => {
        const id = 123
        const callback = undefined
        
        expect(() => retrieveInitialMovies(id,callback)). toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveInitialMovies(id, true)).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveInitialMovies(id,[])).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveInitialMovies(id, {})).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveInitialMovies(id, undefined)).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveInitialMovies(id, null)).toThrowError(TypeError, id + ' is not a function')
    })





})



