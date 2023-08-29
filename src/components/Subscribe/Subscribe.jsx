import {useState} from 'react';
import './Subscribe.scss';

export default function Subscribe() {

    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState({email: ''})

    const handleSubmit = e => {
        e.preventDefault();
        const error = validateEmail();
        setError(error)
        if(error.email === ""){
            alert('Subscribed')
        } else {
            console.log('you need to enter valid email')
        }
    }
    const validateEmail = () => {
        const errorMessage = {}
        const reg = /^\S+@\S+\.\S+$/;
        
        if(!email){
            errorMessage.email = "Email is required"
        } else if(!reg.test(email)) {
            errorMessage.email = "Invalid email"
        }
        else {
            errorMessage.email = ""
        }

        return errorMessage;
    }

    return(
        <>
        <h2>Subscribe</h2>
        <div className="form-wrapper">

            <form
            onSubmit={handleSubmit}
            className="subscribe"
            >
                <label htmlFor="subscribe">Subscribe</label>
                <input 
                type="email"
                id="subscribe"
                name="subscribe"
                placeholder='your email...'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <p className="error">{error.email}</p>
                <button type="submit">Subscribe</button>

            </form>
        </div>
        
        
        
        
        </>
    )
}