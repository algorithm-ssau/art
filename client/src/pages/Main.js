import React from "react";
import img from "../images/serviceimg.jpg"
import open_svg from "../images/quotes.png"
import closed_svg from "../images/quot.png"

export default function Main(){
    return (
        <div>
            <body>
                <div className="header">
                    <div className="container">
                        <div className="header-info">
                            <div className="header-info-head text-center">
                                <a href="index.html"><h1>Let's travel</h1></a>
                                <h2>Самые интересные страны для путешествий</h2>
                            </div>

                            <div className="clearfix"></div>
                            <div className="h_menu4">
                                <a className="toggleMenu" href="">Menu</a>
                                <ul className="nav">
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
                    <div className="services-section">
                        <div className="services-section-left">
                            <h3>Разнообразие стран</h3><br/>
                            <h3>От Лихтенштейна</h3>
                            <h5>(160 км²)</h5>
                            <h3>До России</h3>
                            <h5>(17 130 000 км²)</h5>
                        </div>
                        <div className="services-section-right">
                            <div className="services-section-image">
                                <img src={img} alt=""/>
                            </div>
                            <div className="services-section-right-text">
                                <p><img src={open_svg} alt=""/>Этот сайт создан для людей, которые очень хотят
                                    увидеть красоту всей нашей необъятной планеты, но не определились, куда именно в
                                    первую очередь
                                    им стоит отправиться.</p>
                                <p className="end-q">Посмотрите самые живописные и необычные места в разделе
                                    Каталог.<img src={closed_svg} alt=""/></p>
                                <a href="#">Сергей Булаткин</a>
                                <span>Один из разработчиков "Let's travel"</span>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <footer className="pb-60 pt-70 pos-relative">
                    <div className="pos-top triangle-bottom"></div>
                    <div className="container-fluid">
                        <a href="index.html">
                            <div className="ïmg-200x mlr-auto pos-relative">
                                <img src="images/logo.png" alt=""/>
                            </div>
                        </a>

                        <div className="pt-30">
                            <p className="underline-secondary"><b>Адрес:</b></p>
                            <p>Ивана Булкина 141</p>
                        </div>
                        <br/>

                            <div className="pt-30">
                                <p className="underline-secondary mb-10"><b>Телефон:</b></p>
                                <p>8(846)-223-12-14 </p>
                            </div>
                            <br/>

                                <div className="pt-30">
                                    <p className="underline-secondary mb-10"><b>Email:</b></p>
                                    <p>letstravel@gmail.com </p>
                                </div>
                                <br/>
                    </div>
                </footer>
            </body>
        </div>
    )
}