import Footer from "../components/Footer";
import SearchHeader from "../components/SearchHeader";
import Dropdown from "../components/Dropdown";
import React, {useState} from "react";
import FileInput from "../components/FileInput";

function Redact() {

    const [formData, setFormData] = useState({
        theme: '',
        category: '',
        description: '',
        files: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (files) => {
        setFormData({ ...formData, files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('theme', formData.theme);
        data.append('category', formData.category);
        data.append('description', formData.description);
        for (let i = 0; i < formData.files.length; i++) {
            data.append('files', formData.files[i]);
        }

        fetch('http://localhost:3000/submit-application', {
            method: 'POST',
            body: data
        })
            .then(() => {
                alert("Информация отправлена");
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Произошла ошибка при отправке запроса");
            });
    };

    return (
        <>
            <SearchHeader/>
            <div className="edit_box">
                <p className="edit_title">Редактирование заявки</p>
                <div className="redact">
                    <div className="Vopros">
                        <p className="one1">1. Тема</p>
                        <p className="podheader">Опишите свою проблему в размере нескольких слов.</p>
                        <input className="first" type="text" placeholder="Введите ответ" onChange={handleChange} name="theme" disabled />
                    </div>
                    <div className="Vopros">
                        <p className="two2">2. Категория</p>
                        <p className="podheader">Выберите категорию, которая лучше всего подходит под вашу
                            проблему. </p>
                        <Dropdown handleChange={handleChange} disabled = {true}/>
                    </div>
                    <div className="Vopros">
                        <p className="one">3. Описание</p>
                        <p className="podheader">Расскажите подробнее о причине вашего обращения.</p>
                        <input className="three" type="text" placeholder="Введите ответ" onChange={handleChange} name="description"/>
                    </div>
                    <div className="Vopros">
                        <p className="one">4. Дополнительные материалы</p>
                        <p className="podheader">Загрузите дополнительные файлы, которые помогут нам лучше
                            разобраться в ситуации.</p>
                        <FileInput handleFileChange={handleFileChange} />
                    </div>
                    <div className="Knopki">
                        <input className="Cancel" type="reset" value="Отменить"/>
                        <input className="Send" type="button" value="Изменить" onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Redact;