# Film Fest

##  Overview

Film Fest app aims to offer to their userbase a realiable source of information about films and how the public is evaluating them, granting always updated info to them.

## Link to the project (mobile version): https://ff-productions.herokuapp.com

# Features
![Features](film-fest-doc/images/screenshots/landing.png)

Film Fest app provides updated movie profiles that can be searched by term and genre. Also offers a movie shuffle for those who doesn't know what to see and want to be surprised

<img src="film-fest-doc/images/screenshots/genre-list.png"/>

To unlock other features it is necessary to login

<img src="film-fest-doc/images/screenshots/login.png"/>

In order to deliver a more customized experience, film fest also offers watchlist function to save your favourite movies or those that you want to see in a future.

<img src="film-fest-doc/images/screenshots/watchlist.png"/>
<img src="film-fest-doc/images/screenshots/personal-area.png"/>
<img src="film-fest-doc/images/screenshots/footer.png"/>

# Tech Specs

## Functional Description

<img src="film-fest-doc/images/UseCases.png"/>

>Search, movie specs, genre lists and random movies are ready to use without login. Personal area and watchlist only are reachable and fully functional when we login.

## Technical Description

<img src="film-fest-doc/images/BlockDiagram.png"/>

>Film Fest uses two databases, on one hand uses SKYLABCODERS HEROKUAPP which provides a secure database to store our users information. On the other hand, our other database is THE MOVIE DB which offers updated movie profiles.

<img src="film-fest-doc/images/Components.png"/>

>Film Fest component structure allow to re-utilize them for different uses, like landing component

<img src="film-fest-doc/images/WorkFlow.png"/>

>When we run Film Fest we arrive on landing where Initial Movies logic provides trending movies from now and ever. we can use it as movie searcher, but in order to activate watchlist function it is necessary to register and login.

<img src="film-fest-doc/images/DataModel.png"/>

>App processes are always logged into THE MOVIE DB database in order to offer searchs, querys and movie specs.

<img src="film-fest-doc/images/jasmine.png"/>

>All logic have been tested with Jasmine Framework