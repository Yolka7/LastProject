import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import GreenLine from "./GreenLine";
import Cookies from "js-cookie";

const SearchHeader = ({ page }: { page: 'ticket_for_work' | 'staff' }) => {

    const { user } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        Cookies.remove('token')
        window.location.reload()
    };

    return (
        <div>
            <div className="header flex justify-between items-center p-4 bg-gray-200">
                <Link className="qwerty text-xl font-bold ml-5" to="/">QWERTY Solution</Link>
                <div className="login relative">
                    {user ? (
                        <div className="account_header_box flex items-center space-x-4 hover:cursor-pointer" onClick={handleToggleDropdown}>
                            <span className="cursor-pointer">{user.username}</span>
                            <img src="/car.jpg" className="Img" style={{ maxHeight: "3rem" }} alt="User" />
                            {isDropdownOpen && (
                                <div className="absolute top-12 right-0 w-48 bg-white border rounded-lg shadow-lg p-1 z-10">
                                    <button onClick={handleLogout}
                                            className="w-full text-left text-red-600 hover:bg-gray-100 p-2 rounded">
                                        Выйти
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link className="login_button text-blue-600 hover:underline" to="/signin">Login</Link>
                            /
                            <Link className="login_button text-blue-600 hover:underline" to="/signup">Register</Link>
                        </>
                    )}
                </div>
            </div>
            <GreenLine page={page} user={user} />
        </div>
    )
}

export default SearchHeader