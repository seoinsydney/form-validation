import {useState} from 'react'

export default function CreateAccount() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        conformPassword: '',
    })

    const validateForm = () => {
        const error = {}
        const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if(!email) {
            error.email = "email is required"
        } else if(!reg.test(email)) {
            error.email = "Invalid email"
        } else {
            error.email = ""
        }

        if(!password) {
            error.password = "Password is required"
        } else if(password.length < 6) {
            error.password = "Please enter at least 6 characters."
        } else {
            error.password = ""
        }

        if(!confirmPassword) {
            error.confirmPassword = "Confirm password is required"
        } else if(password.length < 6) {
            error.confirmPassword = "Please enter at least 6 characters."
        } else if(confirmPassword !== password){
            error.confirmPassword = "Doesn't match with password"
        }else {
            error.password = ""
        }

        return error;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm()
        setErrors(errors)
        if (errors.email === "" && errors.password === ""){
            alert("Account created successfully!")
        }
    }

    return(
        <>

        <h2>Create Account</h2>

        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="form-container">

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="error">{errors.email}</p>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password.."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    inputmode="numeric"
                    />
                    <p className="error">{errors.password}</p>
                </div>
                
                <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input 
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="confirm password.."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p className="error">{errors.confirmPassword}</p>
                </div>
                
                <button type="submit">Create Account</button>

            </form>
        </div>
        
        </>
    )
}