import React from 'react';

import './style.scss';
function Infos({ location, timezone, isp, ip }) {
    return (
        <div className="infos">
            <div className="infos__ip-address">
                <h2 className="infos__title">IP ADDRESS</h2>
                <p className="infos__text">{ip}</p>
            </div>
            <div className="infos__location">
                <h2 className="infos__title">LOCATION</h2>
                <p className="infos__text">{location}</p>
            </div>
            <div className="infos__timezone">
                <h2 className="infos__title">TIMEZONE</h2>
                <p className="infos__text">{timezone}</p>
            </div>
            <div className="infos__isp">
                <h2 className="infos__title">ISP</h2>
                <p className="infos__text">{isp}</p>
            </div>
        </div>
    );
}

export default Infos;
