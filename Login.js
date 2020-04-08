import React, { Component } from 'react'
import Axios from 'axios'
import classes from './Login.module.css'

export class Login extends Component {
    
   
   

    render() {
        return (
            <div className={classes.container}>
            <form className={classes.loginform}>
                <h2>Manager Login</h2>
                <div> 
                    <h3>Username</h3>
                    <input type="text" name="username" className="username" required/>                       
                </div>
                <div> 
                    <h3>Password</h3>
                    <input type="password" name="pass" required/>
                    
                </div>
                <div>
                    <button >Login</button>
                    
                </div>
            </form>

        </div>
        )
    }
}

export default Login
