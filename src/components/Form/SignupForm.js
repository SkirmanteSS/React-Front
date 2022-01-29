import React, {useState } from 'react';
import validation from './validation';

const SignupForm =  () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className='container'>
            <div className='app=wrapper'>
                <div>
                    <h2 className='tittle'> Create account</h2>
                </div>
                <form className='form-wrapper'>
                    <div className='name'>
                        <label className='label'> EMail </label>
                        <input className='input' 
                        type='email' 
                        name='email' 
                        value={values.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='password'>
                        <label className='label'> Password </label>
                        <input className='input' 
                        type='password' 
                        name='password' 
                        value={values.password}
                        onChange={handleChange}
                        />

                    </div>
                    <div>
                        <button className='submit' onClick={handleFormSubmit}>
                            Sign Up</button>
                    </div>

                </form>
            </div>

        </div>
    )
};

export default SignupForm;