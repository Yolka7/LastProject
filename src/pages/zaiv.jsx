function Zaiv() {
    
    var str="nvbirne"
    var tem="Сломался стул"
    return ( 
        <div class="vrop"> 
            <div class="content">
                <div class="auth">
                    <div class="window">
                    <p class="header">Заявка №0001</p>
                        <div class="zapoln">
                            <div class="Vopros">
                            <p class="one">1. Тема</p>
                            <p class="first"> {tem} </p> </div>
                            <div className="Vopros">
                            <p class="one">2. Отправитель</p>
                            <p class="first" >  {tem} </p> </div>
                            <p class="one">3. Статус</p>
                            <p class="podheader">Укажите статус обработки заявления.</p>
                            <div class="circle">
                                
                                <label for="В процессе"> <input type="radio" id="В процессе" name="category" value="В процессе" checked /> В процессе</label>
                            
                                
                                <label for="Принято"> <input type="radio" id="Принято" name="category" value="Принято" /> Принято</label>
                        
                                
                                <label for="Отказано"> <input type="radio" id="Отказано" name="category" value="Отказано" /> Отказано</label> </div>
                            
                            <div className="Vopros">
                            <p class="one">4. Описание</p>
                            
                            <p class= "three" > {tem}</p> </div>
                            <div className="Vopros">
                            <p class="one">5. Дополнительные материалы</p>
                            <p class="one">6. Ответ</p>
				            <p class="podheader">Напишите свой ответ на заявку.</p>
                            <input class= "three"type="text" placeholder="Введите ответ"/> </div>
                            <p class="one">7. Дополнение к ответу</p>
				            <p class="podheader">Загрузите файлы, в которых нуждается отправитель заявки.</p>
                            <input type="text" placeholder="Перетащите файл сюда или выберите его вручную"/>
                            <input type="file" name="additionalFiles" multiple />

                            </div>
                            <div className="Knopki">
                            <input class="Cancel" type="reset" value="Отменить"/>
                            <input class="Send" type="submit" value="Отправить"/> </div>
                        </div>
                    </div>    
                </div>
        </div>    
    );
}
export default Zaiv;