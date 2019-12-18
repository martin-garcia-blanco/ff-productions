function Watchlist({title, items, onMovieRender}) {
    return <section className="landing">
        <h1 className="landing__title">Your Watchlist</h1>
        <ul className="landing__results results">
            {items.map(movie => onMovieRender(movie))}
        </ul>
    </section>

}