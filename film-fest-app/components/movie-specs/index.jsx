function MovieSpecs({ movie, onToggleFavSpecs, error, user }) {
    return <section className="view specs">
        <img className="specs__image" src={movie.poster} />
        <h2 className="specs__title">{movie.title}</h2>

        {( typeof user !== 'undefined') && ((movie.fav !==true) ?  <>
        <div className="watchlist" onClick={event=>{
            event.preventDefault()
            onToggleFavSpecs(movie.id)
        }}>
        <p className="watchlist__title">Add to Watchlist</p>
        <i className="material-icons"> add_circle </i></div> </>
        :   <>
        <div className="watchlist" onClick={event=>{
            event.preventDefault()
            onToggleFavSpecs(movie.id)
        }}>
        <p className="watchlist__title">Remove from watchlist</p>
        <i className="material-icons">remove_circle</i></div></>)}

        {error && <Feedback message={error} />}
        <p className="specs__description">{movie.description}</p>
        <p className="specs__genre">{movie.genre}</p>
        <p className="specs__runtime">Duration: {movie.runtime} </p>
        <p className="specs__rating__vote_average">Vote average: {movie.vote_average}</p>
        <p className="desc">State your score!</p>
        <div className="specs__rating rating">
            <div className="Stars" id="" aria-label="Rating of this product is 5 out of 5.">
                <i className="material-icons star-1">stars</i>
                <i className="material-icons star-2">stars</i>
                <i className="material-icons star-3">stars</i>
                <i className="material-icons star-4">stars</i>
                <i className="material-icons star-5">stars</i>
            </div>

        </div>
       
    </section>
}   