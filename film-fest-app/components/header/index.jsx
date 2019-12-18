function Header({ onGoHome, onGoWatchlist, onGoPersonalArea, onGenres, onGetMoviesByGenre, onSearchMovies, onGoRandomMovies }) {
    return <header id="top">
        <nav className="main-bar">
            <img className="main-bar__logo bar-icon" src="../film-fest-design/img/logo.png" alt="Logo" onClick={event => {
                event.preventDefault()
                onGoHome()
            }}></img>

            <SearchMovies searchMovies={onSearchMovies} />

            <i className="main-bar__login material-icons" alt="logIn icon" onClick={event => {
                event.preventDefault()
                onGoPersonalArea()
            }}>account_circle</i>

            <p key={Math.random()} className="main-bar__home header-button" onClick={event => {
                event.preventDefault()
                onGoHome()
            }}>HOME</p>

            <div key={Math.random()} className="main-bar__genre header-button" onClick={event => {
                event.preventDefault()
            }}>GENRE
                <ul className='main-bar__drop-down-list' key={Math.random()}>{onGenres && onGenres.map((genre, index) => <GenresItem onKey={index} onGenre={genre} getMoviesByGenre={onGetMoviesByGenre} />)}</ul>

            </div>


            <p key={Math.random()} className="main-bar__watch-list header-button" onClick={event => {
                event.preventDefault()
                onGoWatchlist()
            }}>LISTS</p>

            <p key={Math.random()} className="main-bar__surprise-me header-button" onClick={event => {
                event.preventDefault()
                onGoRandomMovies()
            }}>RANDOM</p>
        </nav>
    </header>

} 
