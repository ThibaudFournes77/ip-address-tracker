import React from 'react';

import './style.scss';

function Infos() {
    return (
        <div className="infos">
            <div className="infos__ip-address">
                <h2 className="infos__title">IP ADDRESS</h2>
                <p className="infos__text">157.230.229.134</p>
            </div>
            <div className="infos__location">
                <h2 className="infos__title">LOCATION</h2>
                <p className="infos__text">North Bergen, New Jersey, US, 07047</p>
            </div>
            <div className="infos__timezone">
                <h2 className="infos__title">TIMEZONE</h2>
                <p className="infos__text">UTC -04:00</p>
            </div>
            <div className="infos__isp">
                <h2 className="infos__title">ISP</h2>
                <p className="infos__text">DigitalOcean, LLC</p>
            </div>
        </div>
    );
}

export default Infos;
