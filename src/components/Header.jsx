import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header items-center">
            <Link className="qwerty ml-7" to="/">QWERTY Solution</Link>
        </div>
    )
}

export default Header