import React from "react";



export default function About(){
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <div className="page-header-info">
                        <div className="page-header-info-head text-center">
                            <a href="index.html"><h1>Travelica</h1></a>
                        </div>
                        <div className="h_menu4">
                            <a className="toggleMenu" href="">Menu</a>
                            <ul className="nav p-nav">
                                <li><a href="/">Главная</a></li>
                                <li><a href="/catalog">Каталог</a></li>
                                <li><a href="/about">О нас</a></li>
                            </ul>
                            <script type="text/javascript" src="js/nav.js"></script>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-section">
                <div className="container">
                    <div className="main">
                        <div className="details">
                            <h2>О нас</h2><br/>
                            <div className="det_text">
                                <p className="para">Наша команда разработчиков любит путешествовать по всему миру. Мы
                                    побывали во многих странах, однако не собираемся останавливаться на достигнутом.
                                    Благодаря данному сайту каждый член нашей небольшой, но очень сплочённой команды,
                                    состоящей из 4 человек - Полины, Сергея, Анастасии и Артёма, хочет познакомить Вас с
                                    удивительными и захватывающими дух местами нашей планеты, которые просто необходимо
                                    посетить хотя бы раз в жизни. Мы рассказываем обо всех местах, местный колорит
                                    которых нас впечатлил и оставил неизгладимое впечатление, прикрепляя чудесные
                                    фотографии, сделанные Артёмом во время путешествий.</p>
                                <p className="para"> Если у вас есть вопросы - свяжитесь с нами любым удобным
                                    способом. </p>
                                <p className="para"> Наш номер - 8(846)-223-12-14 </p>
                                <p className="para"> Наша почта - letstravel@gmail.com </p>
                                <p className="para"> Наш адрес: город Самара, ул. Ивана Булкина, 141 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="copy-rights text-center">
                    <p>&copy; 2021 Created by  <a href="http://w3layouts.com" target="target_blank">6313-3</a></p>
                </div>
            </div>
        </div>
    )
}