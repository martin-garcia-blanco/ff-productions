function Register({ onRegister, onGoLogin, error }) {
        return <section className="view register ">
                <form onSubmit={event => {
                        event.preventDefault()
                        const { name: { value: name }, surname: { value: surname }, email: { value: email }, password: { value: password }, passwordConfirmation: { value: passwordConfirmation } } = event.target
                        onRegister(name, surname, email, password, passwordConfirmation)

                }}>
                        <ul>
                                <li><span />
                                        <h1 className="register__title">Register</h1>
                                        <span /></li>

                                <li><span />
                                        <input className="register__field" type="text" name="name" placeholder="name"></input>
                                        <span /></li>

                                <li><span />
                                        <input className="register__field" type="text" name="surname" placeholder="surname"></input>
                                        <span /></li>

                                <li><span />
                                        <input className="register__field" type="email" name="email" placeholder="e-mail"></input>
                                        <span /></li>

                                <li><span />
                                        <input className="register__field" type="password" name="password"
                                                placeholder="password"></input>
                                        <span /></li>

                                <li><span />
                                        <input className="register__field" type="password" name="passwordConfirmation"
                                                placeholder="password"></input>
                                        <span /></li>
                                <li><span />
                                        <button className="register__submit" >SIGN IN</button>
                                        <span /></li>
                                <li>
                                        <span />
                                        <button className="register__submit" onClick={event => {
                                                event.preventDefault()
                                                onGoLogin()
                                        }}>LOGIN!</button>
                                        <span />
                                </li>
                        </ul>
                </form>
                <span />

                <span />


                {error && <Feedback message={error} />}
        </section>
}