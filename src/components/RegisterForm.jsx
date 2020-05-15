import React from 'react'


const RegisterForm = ({
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    createUser,
}) => {

    
    return (
        <form onSubmit={createUser}>
        {/* <form> */}
            <div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type= "text" value={firstName} required minLength={3} onChange={(e)=>{setFirstName(e.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type= "text" value={lastName} required onChange={(e)=>{setLastName(e.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type= "email" value={email} required onChange={(e)=>{setEmail(e.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type= "password" value={password} required onChange={(e)=>{setPassword(e.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">Password Confirm:</label>
                    <input type= "password" value={passwordConfirm} required onChange={(e)=>{setPasswordConfirm(e.target.value)}} ></input>
                </div>
                <button type="submit">Create User</button>
            </div>
        </form>
    );
}

export default RegisterForm;