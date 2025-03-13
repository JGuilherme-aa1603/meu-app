import React from 'react';
import './PlusButton.css';
import plusIcon from '../../assets/icons/plus-icon.png';

function PlusButton() {
    return (
        <div className="plus__button">
            <img src={plusIcon} alt="Plus Icon" id="plus__icon"/>
        </div>
    )
}

export default PlusButton;