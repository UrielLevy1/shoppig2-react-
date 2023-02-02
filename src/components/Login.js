function LoginPage({loginUser}) {
    function mysubmit(e) {
        e.preventDefault()
        loginUser("uriel2","uriel2")
    }
    // let { loginUser } = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={mysubmit}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage