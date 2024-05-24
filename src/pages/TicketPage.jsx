import React, {useContext, useEffect} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import Redact from "./redact";
import Zaiv from "./zaiv";

function TicketPage() {
    const {user} = useContext(AuthContext)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const edit = searchParams.get('edit') === 'true';
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/signin');
        }
    }, [user]);

    return (
        <>
            {user && (user.role === "admin" || user.role === "moderator") && <Zaiv onlyForView={false}/>}
            {user && (user.role === "user") && edit && <Redact/>}
            {user && (user.role === "user") && !edit && <Zaiv onlyForView={true}/>}
        </>
    );
}

export default TicketPage;