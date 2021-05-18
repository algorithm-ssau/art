import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCountryDetails} from "../redux/actions/countryActions";

const Details = ({ match }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const countryDetails = useSelector((state) => state.getCountryDetails);
    const { loading, error, country } = countryDetails;

    useEffect(() => {
        console.log(match)
        if (country && match.params.id !== country._id) {
            dispatch(getCountryDetails(match.params.id));
        }
    }, [dispatch, match, country]);
    console.log(country)

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
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
            <div className="main_bg">
                <div className="container">
                    <div className="main">
                        <div className="details">
                            <h2>{country.countryName}</h2>
                            <div className="det_pic">
                                <img src={country.bigPhoto} alt=""/>
                            </div>
                            <br/>
                            <div className="det_text">
                                <p className="para">{country.countryInformation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )}
            <div className="footer">
                <div className="copy-rights text-center">
                    <p>&copy; 2021 Created by <a href="http://w3layouts.com" target="target_blank">6313-3</a></p>
                </div>
            </div>

        </div>
    )
};
export default Details;

