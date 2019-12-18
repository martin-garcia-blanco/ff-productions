function Login({onLogin, onGoRegister, error}) {

    return <section className="view login ">
        <form onSubmit={event=>{
            event.preventDefault()
            const {email:{value:username}, password:{value:password}} = event.target
            onLogin(username,password)
        }}>
            <h1 className="login__title">Login</h1>
            <input className="login__field" type="email" name="email" placeholder="e-mail"></input>
            <input className="login__field" type="password" name="password" placeholder="password"></input><br/>
            <button className="login__submit">ENTER</button>
        </form>
        <button className="login__submit" onClick={event=>{
            event.preventDefault()
            onGoRegister()
        }}>REGISTER!</button>

        {error && <Feedback message={error} />}
    </section>

}