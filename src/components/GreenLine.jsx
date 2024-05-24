import React from "react";
import {Link} from "react-router-dom";

const GreenLine = ({page, user}) => {
    return (
        <>
            <div className="green-line">
                <Link to="/" className={page === 'ticket' || !page ? "underline" : ""}> Мои заявки</Link>
                {false && user && (user.role === 'admin' || user.role === "moderator") &&
                    <>
                        <div>
                            |
                        </div>
                        <Link to="/manage" className={page === 'staff' ? "underline" : ""}>
                            Staff
                        </Link>
                    </>
                }
            </div>
        </>
    )
}

export default GreenLine