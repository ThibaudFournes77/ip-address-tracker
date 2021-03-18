import React from 'react';
import iconArrow from 'src/assets/images/icon-arrow.svg';

import './style.scss';

function Header({value, onChangeInputValue, onFormSubmit}) {
    const handleChange = (e) => {
        onChangeInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
    }
    return (
            <form className="header__form" onSubmit={handleSubmit}>
                <input
                    className="form__input"
                    placeholder="Search for any IP address or domain"
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                <button
                    className="form__submit"
                    type="submit"
                >
                    <img src={iconArrow} />
                </button>
            </form>
    );
}

export default Header;
