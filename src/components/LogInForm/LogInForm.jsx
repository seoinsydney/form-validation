import {useState} from'react';
import './LogInForm.scss';

export default function LogInForm() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
      email: '',
      password: '',
    })

    const handleSubmit = e => {
      e.preventDefault();
      const errors = validateForm();
      setErrors(errors)
      if(errors.email === "" && errors.password === ""){
        alert('logged in')
      }
    }

    const validateForm = () => {
      const error = {}
      const emailRegex = /^\S+@\S+\.\S+$/;

      if(!email){
        error.email = "Email is required."
      } else if (!emailRegex.test(email)) {
        error.email = "Invalid email"
      } else {
        error.email = ""
      }

      if(!password) {
        error.password = "Password is required"
      } else if(password.length < 6) {
        error.password = "Password must be at least 6 characters."
      } else {
        error.password= ""
      }
      return error;
    }

    const logInGoogle = () => {
      alert('Log in with google')
    }

      return (
        <div className="form-wrapper">
          <h2>Log In</h2>
    
          <form 
          onSubmit={handleSubmit} 
          className="form-container">
    
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
              <p className="error">{errors.email && <>{errors.email}</>}</p>
            </div>
    
            <div>
              <label htmlFor="password">Password<span><a>Forgot password?</a></span></label>
              <input 
                type="password"
                id="password"
                name="password"
                placeholder="password.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="error">{errors.password && <>{errors.password}</>}</p>
            </div>          
            
            <button type="submit" className="log-in">Log In</button>
            <hr />
            <div className="google">
            <button type="button" onClick={logInGoogle}>
              <img src="./google-icon-2048x2048-czn3g8x8.png" 
              alt="Log in with google"
              />
              log in with google</button>
            </div>
    
          </form>
          
          <p className="sign-up">No account yet? <a>sign Up</a></p>
    
        </div>
      );
}