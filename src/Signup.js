import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {

        const [values, setValues] = useState({
            username:'',
            email:'',
            password:''
        })
        const navigate = useNavigate();
        const [errors, setErrors] = useState({})
        const handleInput = (event) => {
            setValues(prev => ({...prev, [event.target.name]: event.target.value}))
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setErrors(Validation(values));
            if(errors.username === "" && errors.email === "" && errors.password === "") {
                axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign Up</h2>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor="username"><strong>Username</strong></label>
                    <input type='text' placeholder="Enter Username" name='username' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.username && <span className='text-danger'>{errors.username}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type='email' placeholder="Enter Email" name='email'onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type='password' placeholder="Password" name='password' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                    <button type='submit' className="btn btn-success w-100 rounded-0">Sign Up</button>
                    <p>Made by Sami Rifai</p>
                    <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>   
            </form>
        </div>
    </div>
    )
}

export default Signup;