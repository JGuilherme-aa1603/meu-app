import React, { useEffect, useState } from "react";
import './LoginButton.css'

function LoginButton () {

    const [openLogin, setOpenLogin] = useState(false);

    useEffect(() => {

        const loginModal = document.querySelector('.login__modal__container') as HTMLDivElement;
    
        if (!loginModal) return;
        
        function closeModal(event: MouseEvent) {
            if (event.target === loginModal) {
                setOpenLogin(false);
            }
        }
    
        loginModal.addEventListener("click", closeModal);
    
        return () => {
            loginModal.removeEventListener("click", closeModal);
        };
    }, [openLogin]);

    return (
        <div className="login__container">
            <button id="login__button" onClick={() => setOpenLogin(true)}>Login</button> 

            {openLogin && (
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