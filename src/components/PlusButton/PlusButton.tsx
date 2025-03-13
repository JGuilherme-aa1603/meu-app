import React, { useEffect, useState } from 'react';
import './PlusButton.css';
import plusIcon from '../../assets/icons/plus-icon.png';

function PlusButton() {

    const [openCreate, setOpenCreate] = useState(false);

    useEffect(() => {
        
        const createModal = document.querySelector('.create__modal__container') as HTMLDivElement;
    
        if (!createModal) return;
        
        function closeModal(event: MouseEvent) {
            if (event.target === createModal) {
                setOpenCreate(false);
            }
        }
    
        createModal.addEventListener("click", closeModal);
    
        return () => {
            createModal.removeEventListener("click", closeModal);
        };
    }, [openCreate]);

    return (
        <div className="plus__button">
            <button onClick={() => setOpenCreate(true)}>
                <img src={plusIcon} alt="Plus Icon" id="plus__icon"/>
            </button>

            {openCreate && (
                <div className="create__modal__container">
                    <div className="create__modal">
                        <div className= "create__content">
                        </div>
                    </div>
                </div>
             )}
        </div>
    )
}

export default PlusButton;