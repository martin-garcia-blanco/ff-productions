function Footer({onResetHash}) {

    return <footer className="bottom">
        <nav className="footer-nav">
            <div className="footer-nav__go-up go-up">
                <div className="go-up__button" onClick={event=>{
                    event.preventDefault()                    
                    onResetHash()                    
                }}></div>
            </div>
            <div className="footer-nav__social-media social-media">
                <a target="_blank" href="https://www.facebook.com/themoviedb/"> <img className="social-media__icon" src="./public/img/facebook.png" alt="facebook"></img></a>
                <a target="_blank" href="https://www.instagram.com/imdb/"> <img className="social-media__icon" src="./public/img/instagram.png" alt="instagram"></img></a>
                <a target="_blank" href="https://twitter.com/themoviedb?lang=es"><img className="social-media__icon" src="./public/img/twitter.png" alt="twitter"></img></a>
                <a target="_blank" href="https://www.youtube.com/channel/UC_vz6SvmIkYs1_H3Wv2SKlg"> <img className="social-media__icon" src="./public/img/youtube.png" alt="youtube"></img></a>
            </div>
            <div className="footer-nav copyright">
                <p> © Copyright 2019, FF Productions, Inc. o afiliados. </p>
            </div>
        </nav>
    </footer>

}