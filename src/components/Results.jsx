import React from 'react'


const Results = ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    users
}) => {
    return (
        <div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Password Confirm: {passwordConfirm}</p>
            </div>
            <div>
                <ul>
                    {
                        users.map((user, index)=>{
                            return(
                                <div key={index}>
                                    <p>{"First Name: "}{user.firstName}</p>
                                    <p>{" Last Name: "}{user.lastName}</p>
                                    <p>{" Email: "}{user.email}</p>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Results;