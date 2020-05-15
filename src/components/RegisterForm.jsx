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
                    <input type= "text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type= "text" value={lastName}onChange={(e)=>{setLastName(e.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type= "text" value={email} onChange={(e)=>{setEmail(e.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type= "password" value={password} onChange={(e)=>{setPassword(e.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">Password Confirm:</label>
                    <input type= "password" value={passwordConfirm} onChange={(e)=>{setPasswordConfirm(e.target.value)}} ></input>
                </div>
                <button type="submit">Create User</button>
            </div>
        </form>
    );
}

export default RegisterForm;