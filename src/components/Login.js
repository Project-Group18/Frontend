import React from 'react'
import styles from './Login.module.css'

function LoginPopUp(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            
            <div className={styles.popup_inner}>
                <div className= {styles.popup_text_container}>
                <p>Username:</p>
                <input type="text" placeholder="username"></input>
                <p>Password:</p>
                <input type="text" placeholder="password"></input>
                
                <p className={styles.forgotPassword}>Forgot your password?</p>
                <button className={styles.loginButton}>Log in</button>
                </div>
                <button className={styles.closeButton} onClick={() => props.setTrigger(false)}>X</button> 
            </div>
               
        </div>
    
    ) : "";
}

export default LoginPopUp