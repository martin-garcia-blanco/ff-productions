function SearchMovies({ searchMovies }) {
    return <form className="main-bar__search search-bar" onSubmit={event => {
        event.preventDefault()

        searchMovies(event.target.query.value)

    }}>
        <input type="search" className="search-bar__search" name="query" />
        <button className='search-buton'><i className="search-bar__icon  bar-icon material-icons" alt="search icon">search</i></button>

    </form>
}