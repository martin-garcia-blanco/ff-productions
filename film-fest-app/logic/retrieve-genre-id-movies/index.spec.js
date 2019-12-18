describe('retrieve-genre-by-id', () => {


    it('should retrieve movies correctly', done => {
        const genreID = 28

        retrieveGenreIdMovies(genreID, (error, result) => {
            expect(error).toBeUndefined()
            expect(result).toBeDefined()
            expect(result.results instanceof Array).toBeTruthy()

            expect(result.results.length === 20).toBeTruthy()

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


    it('should throw an error because genreID is not a number', () => {
        const genreID = undefined
        const callback = function() { return null }
        expect(() => retrieveGenreIdMovies(genreID, callback)).toThrowError(TypeError, genreID + ' is not a number')
        expect(() => retrieveGenreIdMovies(true)).toThrowError(TypeError, 'true is not a number')
        expect(() => retrieveGenreIdMovies([])).toThrowError(TypeError, ' is not a number')
        expect(() => retrieveGenreIdMovies({})).toThrowError(TypeError, '[object Object] is not a number')
        expect(() => retrieveGenreIdMovies(undefined)).toThrowError(TypeError, 'undefined is not a number')
        expect(() => retrieveGenreIdMovies(null)).toThrowError(TypeError, 'null is not a number')

    })

    it('should throw an error because callback is not a function', () => {
        const genreID = 123
        const callback = undefined
        expect(() => retrieveGenreIdMovies(genreID, callback)).toThrowError(TypeError, callback + ' is not a function')
        expect(() => retrieveGenreIdMovies(genreID, true)).toThrowError(TypeError, 'true is not a function')
        expect(() => retrieveGenreIdMovies(genreID, [])).toThrowError(TypeError, ' is not a function')
        expect(() => retrieveGenreIdMovies(genreID, {})).toThrowError(TypeError, '[object Object] is not a function')
        expect(() => retrieveGenreIdMovies(genreID, undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => retrieveGenreIdMovies(genreID, null)).toThrowError(TypeError, 'null is not a function')
    })


})