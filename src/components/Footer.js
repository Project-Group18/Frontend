import React from 'react'
import styles from './Footer.module.css'
import ObsPopup from './ObsPopup';
import LoginPopUp from './Login';
import RegisterPopUp from './Register.js';
import { useState } from 'react';

export default function Footer() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonLogin, setButtonLogin] = useState(false);
    const [buttonRegister, setButtonRegister] = useState(false);
    return (
        <div>
             <footer>
        
        <div className={styles.footer}>
          <p>Terms of service</p>
          <p>Contact us</p>
          <p>About us</p>
          <p className={styles.restaurantLogin} onClick={() => setButtonPopup(true)}>For restaurants</p>

          <div className={styles.socialmedia}>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-instagram-square"></i>
          </div>
        </div>

      </footer>
      <ObsPopup trigger={buttonPopup} setTrigger ={setButtonPopup}/>
      <LoginPopUp trigger ={buttonLogin} setTrigger ={setButtonLogin}/>
      <RegisterPopUp trigger={buttonRegister} setTrigger ={setButtonRegister}/>
        </div>
    )
}
