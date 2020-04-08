import React, { Component } from 'react'
import Axios from 'axios'
import classes from './Login.module.css'

export class Signup extends Component {
    
   
   

    render() {
        return (
            <div className={classes.container}>
            <form className={classes.loginform}>
                <h2>Manager Sign Up</h2>
                <div className={classes.name}> 
                    {/* <div className={classes.divStyle}> */}
                    <h3>First Name</h3>
                    <input type="text" name="Firstname" className="username" required/> 
                    </div>
                    <div className={classes.divStyle}>
                    <h3>Last Name</h3>
                    <input type="text" name="Lastname" required/> 
                    </div>                     
                {/* </div> */}
                <div> 
                    <h3>Last Name</h3>
                    <input type="text" name="Lastname" required/>
                    
                </div>
                <div> 
                    <h3>Email</h3>
                    <input type="email" name="pass" required/>
                    
                </div>
                <div> 
                    <h3>Password</h3>
                    <input type="password" name="pass" required/>
                    
                </div>
                <div> 
                    <h3>Address</h3>
                    <textarea className={classes.address} type="text" required/>
                    
                </div>
                <div> 
                    <h3>Date Of Birth</h3>
                    <input type="date" className={classes.dob} required/>
                    
                </div>
                <div> 
                    <h3>Company</h3>
                    <input type="text" required/>
                    
                </div>
                <div>
                    <button >Sign-Up</button>
                    
                </div>
            </form>

        </div>
        )
    }
}

export default Signup
