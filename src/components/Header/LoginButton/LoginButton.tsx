import React, { useEffect, useState } from "react";
import './LoginButton.css'

function LoginButton () {

    const [loginAberto, setLoginAberto] = useState(false);

    useEffect(() => {

        const loginModal = document.querySelector('.login__modal__container') as HTMLDivElement;
    
        if (!loginModal) return;
        
        function closeModal(event: MouseEvent) {
            if (event.target === loginModal) {
                setLoginAberto(false);
            }
        }
    
        loginModal.addEventListener("click", closeModal);
    
        return () => {
            loginModal.removeEventListener("click", closeModal);
        };
    }, [loginAberto]);

    return (
        <div className="login__container">
            <button id="login__button" onClick={() => setLoginAberto(true)}>Login</button> 

            {loginAberto && (
                <div className="login__modal__container">
                    <div className="login__modal">
                        <div className= "login__content">
                        </div>
                    </div>
                </div>
             )}
        </div>

    )}
export default LoginButton;