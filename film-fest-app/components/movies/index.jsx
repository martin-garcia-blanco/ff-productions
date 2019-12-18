function Movies({title, items, onMovieRender}) {
    return <section className="landing">
        <h1 className="landing__title">{title}</h1>
        <ul className="landing__results results">
            {items.map(movie => onMovieRender(movie))}
        </ul>
    </section>

}