import React, {useContext, useEffect, useState} from 'react';
import Footer from "../components/Footer";
import SearchHeader from "../components/SearchHeader";
import {AuthContext} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import {getApplications} from "../api/APIServices";

const MainPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [applications, setApplications] = useState(null);
    const [doneApplications, setDoneApplications] = useState(null);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        if (user) {
            getApplications(false).then(app => setApplications(app.data))
            getApplications(true).then(app => setDoneApplications(app.data))
            setIsLoaded(true);
        }
    }, [user]);

    useEffect(() => {
        if (isLoaded) {
            console.log(applications)
            console.log(doneApplications)
        }
    }, [applications])

    const [showContent, setShowContent] = useState(true);
    const [rotate, setRotate] = useState(false);

    const handleToggleContent = () => {
        setShowContent(!showContent);
        setRotate(!rotate)
    }

    const [showDoneContent, setShowDoneContent] = useState(true);
    const [rotateDone, setRotateDone] = useState(false);

    const handleToggleDoneContent = () => {
        setShowDoneContent(!showDoneContent);
        setRotateDone(!rotateDone)
    }

    const navigate = useNavigate();

    const handleClick = () => {
        if (isLoaded) {
            navigate("/new_ticket");
        }
    };

    const teleportToTicket = (id) => {
        if (isLoaded) {
            navigate(`/ticket/${id}`)
        }
    }

    const handleEditButton = (id) => {
        if (isLoaded) {
            navigate(`/ticket/${id}?edit=true`)
        }
    }

    return (
        <div className="flex flex-col justify-between h-full">
            <SearchHeader/>

            <div className="main h-full">
                <div className="applications" onClick={handleToggleContent}>
                    <div className="applications_logo">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={{transform: rotate ? 'rotate(-90deg)' : 'rotate(0deg)'}}>
                            <path
                                d="M6.99997 1.66669L0.999971 1.66669C0.939224 1.66688 0.879679 1.68364 0.827746 1.71515C0.775813 1.74667 0.733458 1.79175 0.705239 1.84554C0.677022 1.89934 0.664009 1.95981 0.667603 2.02045C0.671198 2.0811 0.691263 2.13961 0.725638 2.18969L3.72564 6.52303C3.84997 6.70269 4.1493 6.70269 4.27397 6.52303L7.27397 2.18969C7.3087 2.13971 7.32906 2.08117 7.33285 2.02043C7.33664 1.95969 7.32371 1.89907 7.29547 1.84516C7.26722 1.79125 7.22475 1.74611 7.17265 1.71464C7.12055 1.68318 7.06083 1.6666 6.99997 1.66669Z"
                                fill="black" fillOpacity="0.7"/>
                        </svg>
                    </div>
                    <p className="text-xs text-slate-700"> Все заявки</p>
                </div>
                <hr className="palka"/>
                {/*<div className="Palka">*/}

                <div className={showContent ? "okna" : "hidden okna"}>
                    {applications && applications.length !== 0 && applications.applications.map((num, index) => (
                        <div className="window" key={index}>
                            <div className="window_text hover:cursor-pointer"
                                 onClick={() => teleportToTicket(index + 1)}>
                                <p className="windows_title">{num.theme}</p>
                                <p className="windows_subtitle">{num.username}, {num.category}</p>
                                <p className="windows_body">{num.description}</p>
                                <div className="process_block">
                                    <div className="process_icon">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9" cy="9" r="9" fill="#FA842B"/>
                                        </svg>
                                    </div>
                                    <p className="process_text">{num.status}</p>
                                </div>
                            </div>

                            <div className="ml-3 mt-5 flex text-xs hover:cursor-pointer" onClick={() => handleEditButton(index + 1)}>
                                <div className="mr-1">
                                    <svg fill="#000000" height="18px" width="18px" version="1.1" id="Capa_1"
                                         viewBox="0 0 306.637 306.637" xmlSpace="preserve">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                           strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g>
                                                <g>
                                                    <path
                                                        d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896 l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"></path>
                                                    <path
                                                        d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095 L265.13,75.602L231.035,41.507z"></path>
                                                </g>
                                            </g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                        </g>
                                    </svg>
                                </div>
                                <span>Редактировать</span>
                            </div>
                        </div>
                    ))
                    }

                    {user &&
                        <div className="window window_add_new content-center text-center hover:cursor-pointer flex justify-center items-center"
                             onClick={handleClick}>
                            <div>
                                <div className="flex flex-col text-center items-center">
                                    <div className="application_logo">
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M34.625 0.25H3.375C2.5462 0.25 1.75134 0.57924 1.16529 1.16529C0.57924 1.75134 0.25 2.5462 0.25 3.375V34.625C0.25 35.4538 0.57924 36.2487 1.16529 36.8347C1.75134 37.4208 2.5462 37.75 3.375 37.75H34.625C35.4538 37.75 36.2487 37.4208 36.8347 36.8347C37.4208 36.2487 37.75 35.4538 37.75 34.625V3.375C37.75 2.5462 37.4208 1.75134 36.8347 1.16529C36.2487 0.57924 35.4538 0.25 34.625 0.25ZM29.9375 20.5625H20.5625V29.9375C20.5625 30.3519 20.3979 30.7493 20.1049 31.0424C19.8118 31.3354 19.4144 31.5 19 31.5C18.5856 31.5 18.1882 31.3354 17.8951 31.0424C17.6021 30.7493 17.4375 30.3519 17.4375 29.9375V20.5625H8.0625C7.6481 20.5625 7.25067 20.3979 6.95765 20.1049C6.66462 19.8118 6.5 19.4144 6.5 19C6.5 18.5856 6.66462 18.1882 6.95765 17.8951C7.25067 17.6021 7.6481 17.4375 8.0625 17.4375H17.4375V8.0625C17.4375 7.6481 17.6021 7.25067 17.8951 6.95765C18.1882 6.66462 18.5856 6.5 19 6.5C19.4144 6.5 19.8118 6.66462 20.1049 6.95765C20.3979 7.25067 20.5625 7.6481 20.5625 8.0625V17.4375H29.9375C30.3519 17.4375 30.7493 17.6021 31.0424 17.8951C31.3354 18.1882 31.5 18.5856 31.5 19C31.5 19.4144 31.3354 19.8118 31.0424 20.1049C30.7493 20.3979 30.3519 20.5625 29.9375 20.5625Z"
                                                fill="black" fill-opacity="0.7"/>
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 pt-2">
                               Создать новую заявку
                            </span>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="applications" onClick={handleToggleDoneContent}>
                    <div className="applications_logo">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={{transform: rotateDone ? 'rotate(-90deg)' : 'rotate(0deg)'}}>
                            <path
                                d="M6.99997 1.66669L0.999971 1.66669C0.939224 1.66688 0.879679 1.68364 0.827746 1.71515C0.775813 1.74667 0.733458 1.79175 0.705239 1.84554C0.677022 1.89934 0.664009 1.95981 0.667603 2.02045C0.671198 2.0811 0.691263 2.13961 0.725638 2.18969L3.72564 6.52303C3.84997 6.70269 4.1493 6.70269 4.27397 6.52303L7.27397 2.18969C7.3087 2.13971 7.32906 2.08117 7.33285 2.02043C7.33664 1.95969 7.32371 1.89907 7.29547 1.84516C7.26722 1.79125 7.22475 1.74611 7.17265 1.71464C7.12055 1.68318 7.06083 1.6666 6.99997 1.66669Z"
                                fill="black" fillOpacity="0.7"/>
                        </svg>
                    </div>
                    <p className="text-xs text-slate-700">Выполненные заявки</p>
                </div>
                <hr className="palka"/>
                <div className={showDoneContent ? "okna" : "hidden okna"}>
                    {doneApplications && doneApplications.length !== 0 && doneApplications.applications.map((num, index) => (
                        <div className="window hover:cursor-pointer" key={index}
                             onClick={() => teleportToTicket(index + 1)}>
                            <div className="window_text">
                                <p className="windows_title">{num.theme}</p>
                                <p className="windows_subtitle">{num.username}, {num.category}</p>
                                <p className="windows_body">{num.description}</p>
                                <div className="process_block">
                                    <div className="process_icon">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9" cy="9" r="9" fill="#FA842B"/>
                                        </svg>
                                    </div>
                                    <p className="process_text">{num.status}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default MainPage;