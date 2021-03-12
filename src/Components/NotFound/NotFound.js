import React from 'react';
import './style.css';
// import style from './style';
import  { Link } from 'react-router-dom'

function NotFound() {

    return (
        <div className="NotFound">
            <div id="clouds">
                <div className="cloud x1" />
                <div className="cloud x1_5" />
                <div className="cloud x2" />
                <div className="cloud x3" />
                <div className="cloud x4" />
                <div className="cloud x5" />
            </div>
            <div className="c">
                <div className="_404">404</div>
                <hr />
                <div className="_1">THE PAGE</div>
                <div className="_2">WAS NOT FOUND</div>

                <Link className="btn" to="/">BACK TO HOME</Link>
            </div>
        </div>

    );

}

export default NotFound;