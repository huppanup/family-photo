import {useAuth} from './utils/AuthUtils'

export default () => {
    const { currentUser, isVerified, login, signup, logout } = useAuth();
    console.log("Sign up")
    const loginProc = () => signup('mijung', 'password').then((user) => {
        console.log(user)
        console.log("logging out")
        logout()
        console.log("Logging in")
        const result = login('mijung', 'password')
        console.log(result)

    })

    
    return(
        <>
            <button onClick={() => loginProc()}>Sign up</button>
        </>
    )
}