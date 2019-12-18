function WatchlistItem({ item, onMovieSpecs, onToggleFav }) {
    return <li className="results__item movie" onClick = {event=>{
        event.preventDefault()
        onMovieSpecs(parseInt(item.id))
    }}>
        <img className="movie__image" src={item.poster} />
        <h2 className="movie__title">{item.title}</h2>
        <i className="material-icons" onClick={event=>{
            event.preventDefault()
            event.stopPropagation()
            onToggleFav(parseInt(item.id))
        }}>remove_circle</i>
    </li>
}