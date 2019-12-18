describe('retrieve genres', () => {


    it('should throw an error because ID is not a number', () => {
        const id = undefined
        const callback = function() { return null }

        expect(() => retrieveGenres(id, callback)).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveGenres(true)).toThrowError(TypeError, 'true is not a function')
        expect(() => retrieveGenres([])).toThrowError(TypeError, ' is not a function')
        expect(() => retrieveGenres({})).toThrowError(TypeError, '[object Object] is not a function')
        expect(() => retrieveGenres(undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => retrieveGenres(null)).toThrowError(TypeError, 'null is not a function')
    })


    it('should throw an error because callback is not a function', () => {
        const id = 123
        const callback = undefined

        expect(() => retrieveGenres(id, callback)).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveGenres(id, true)).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveGenres(id, [])).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveGenres(id, {})).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveGenres(id, undefined)).toThrowError(TypeError, id + ' is not a function')
        expect(() => retrieveGenres(id, null)).toThrowError(TypeError, id + ' is not a function')
    })

})