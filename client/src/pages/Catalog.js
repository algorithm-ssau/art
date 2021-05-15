import React from "react";
import pic1 from "../images/b-pic1.jpg"
import pic2 from "../images/b-pic2.jpg"
import pic3 from "../images/b-pic3.jpg"


export default function Catalog(){
    return (
        <div>

            <div className="page-header">
                <div className="container">
                    <div className="page-header-info">
                        <div className="page-header-info-head text-center">
                            <a href="index.html"><h1>Let's travel</h1></a>
                        </div>
                        <div className="h_menu4">
                            <a className="toggleMenu" href="">Menu</a>
                            <ul className="nav p-nav">
                                <li className="active"><a href="/">Главная</a></li>
                                <li><a href="/catalog">Каталог</a></li>
                                <li><a href="/about">О нас</a></li>
                            </ul>
                            <script type="text/javascript" src="js/nav.js"></script>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_bg">
                <div className="container">
                    <div className="online_reservation">
                        <div className="b_room">
                        </div>
                        <div className="grids_of_3">
                            <div className="grid1_of_3">
                                <div className="grid1_of_3_img">
                                    <a href="details.html">
                                        <img src={pic2} alt=""/>
                                        <span className="next"> </span>
                                    </a>
                                </div>
                                <h4><a href="#">Франция</a></h4>
                                <p>Франция – одна из самых популярных в мире стран по туризму. Ежегодно она принимает
                                    более 30 млн. иностранных туристов. Это страна, в которой каждый мечтает побывать
                                    хоть раз в жизни. </p>
                            </div>
                            <div className="grid1_of_3">
                                <div className="grid1_of_3_img">
                                    <a href="details.html">
                                        <img src={pic1} alt=""/>
                                        <span className="next"> </span>
                                    </a>
                                </div>
                                <h4><a href="#">Испания</a></h4>
                                <p>Испания — одна из самых популярных среди туристов стран мира. Летом это прежде всего
                                    курорты с бесплатными пляжами, изумительным морем и расслабленной жизнью.</p>
                            </div>
                            <div className="grid1_of_3">
                                <div className="grid1_of_3_img">
                                    <a href="details.html">
                                        <img src={pic3} alt=""/>
                                        <span className="next"> </span>
                                    </a>
                                </div>
                                <h4><a href="#">Мексика</a></h4>
                                <p>Оно славится своими пляжами на побережьях Тихого океана и Мексиканского залива и
                                    разнообразным ландшафтом. Здесь встречается горная местность, пустыни и тропические
                                    леса. По всей стране можно увидеть развалины древних построек.</p>
                            </div>
                            <div className="grid1_of_3">
                                <div className="grid1_of_3_img">
                                    <a href="details.html">
                                        <img src="images/b-pic2.jpg" alt=""/>
                                        <span className="next"> </span>
                                    </a>
                                </div>
                                <h4><a href="#">single room<span>120$</span></a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.</p>
                            </div>
                            <div className="grid1_of_3">
                                <div className="grid1_of_3_img">
                                    <a href="details.html">
                                        <img src="images/b-pic1.jpg" alt=""/>
                                        <span className="next"> </span>
                                    </a>
                                </div>
                                <h4><a href="#">double room<span>180$</span></a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.</p>
                            </div>
                            <div className="grid1_of_3">
                                <div className="grid1_of_3_img">
                                    <a href="details.html">
                                        <img src="images/b-pic3.jpg" alt=""/>
                                        <span className="next"> </span>
                                    </a>
                                </div>
                                <h4><a href="#">suite room<span>210$</span></a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="copy-rights text-center">
                        <p>&copy; 2021 Created by  <a href="http://w3layouts.com" target="target_blank">6313-3</a></p>
                    </div>
                </div>
            </div>

        </div>
    )
}