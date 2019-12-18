function GenresItem({ onKey, onGenre, getMoviesByGenre }) {
    return <li key={onKey} className="results__item movie">
        <h2 className="movie__title" onClick={() => {
            getMoviesByGenre(onGenre.id, onGenre.name)
        }}>{onGenre.name}</h2>
    </li>
}