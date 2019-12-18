function PersonalArea({ onPersonalArea, onSave, onSignOut, user, error }) {

    return <section className="view personal-area">
        <form onSubmit={event => {
            event.preventDefault() 
        }}>
            <h1 className="personal-area__title">Personal Area</h1>
            <p>Name:</p>
            <input className="personal-area__field" type="text" name="name" placeholder={user.name} disabled required></input>
            <p>Surname:</p>
            <input className="personal-area__field" type="text" name="surname" placeholder={user.surname} disabled required></input>
            <p>Email:</p>
            <input className="personal-area__field" type="email" name="email" placeholder={user.username} disabled required></input>
            <p>Password:</p>
            <input className="personal-area__field" type="password" name="password" disabled required></input>
            <p>Password confirmation:</p>
            <input className="personal-area__field" type="password" name="password-confirmation" disabled required></input>
            <button className="personal-area__submit" onClick={event => {
                event.preventDefault()
                const element = document.getElementsByClassName("personal-area__field")
                for (let item of element) {
                    item.removeAttribute("disabled")
                }
            }}>MODIFY</button>
            <button className="personal-area__submit" onClick={event => {
                event.preventDefault()
                let items = document.getElementsByClassName("personal-area__field");
                console.log(items)
                debugger
                const name = items[0].value
                const surname = items[1].value
                const email = items[2].value
                const password = items[3].value
                const passwordConfirmation = items[4].value
                onSave(name, surname, email, password, passwordConfirmation)
            }}>SAVE</button>
            <button className="personal-area__submit" onClick={event => {
                event.preventDefault()
                onSignOut()
            }}>SIGN OUT</button>
        </form>
        {error && <Feedback message={error} />}

    </section>

}