import React from 'react';
import iconArrow from 'src/assets/images/icon-arrow.svg';

import './style.scss';

function Header() {
    return (
            <form className="header__form">
                <input
                    className="form__input"
                    placeholder="Search for any IP address or domain"
                    type="text"
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
