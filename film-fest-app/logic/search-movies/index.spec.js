describe ('search movies', () => {  
    
    it ('should retrieve movies correctly', done => {
        const searchQuery = 'kjkj'

        searchMovies(searchQuery, (error, result) => {
            expect(error).toBeUndefined()
            expect(result).toBeDefined()
            expect(result.results instanceof Array).toBeTruthy()

            expect(result.results.length === 20).toBeFalsy()

            result.results.forEach(element => {
                expect(element.poster_path).tobeDefined()
                expect(element.title).tobeDefined()
                expect(element.id).tobeDefined()

                expect(typeof element.id === 'number').toBeTruthy()
                expect(typeof element.poster_path === 'string').toBeTruthy()
                expect(typeof element.title === 'string').toBeTruthy()
                
            });
            done()
         })
    })   
    
    it('should throw an error because ID is not a number', () => {

            const id = undefined
            const callback = function(){return null}          

            expect(() => searchMovies(id, callback)).toThrowError(TypeError, id + ' is not a string')
            expect(() => searchMovies(true)).toThrowError(TypeError, 'undefined is not a function')
            expect(() => searchMovies([])).toThrowError(TypeError, 'undefined is not a function')
            expect(() => searchMovies({})).toThrowError(TypeError,'undefined is not a function')
            expect(() => searchMovies(undefined)).toThrowError(TypeError,'undefined is not a function')
            expect(() => searchMovies(null)).toThrowError(TypeError, 'undefined is not a function')
            
    })

    it('should throw an error because callback is not a function', () => {

        const id = 123
        const callback = undefined         

        expect(() => searchMovies(id, callback)).toThrowError(TypeError, callback + ' is not a function')
        expect(() => searchMovies(id,true)).toThrowError(TypeError, 'true is not a function')
        expect(() => searchMovies(id,[])).toThrowError(TypeError, ' is not a function')
        expect(() => searchMovies(id,{})).toThrowError(TypeError,'[object Object] is not a function')
        expect(() => searchMovies(id, undefined)).toThrowError(TypeError,'undefined is not a function')
        expect(() => searchMovies(id, null)).toThrowError(TypeError, 'null is not a function')
        
    })
})