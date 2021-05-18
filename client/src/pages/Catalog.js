import React from "react";
import Country from "../components/Country";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getCountries as listCountries } from "../redux/actions/countryActions";

const Catalog = () => {
    const dispatch = useDispatch();

    const getCountries = useSelector((state) => state.getCountries);
    const { countries, loading, error } = getCountries;

    useEffect(() => {

        dispatch(listCountries());
    }, [dispatch]);

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
                                {loading ? (
                                    <h2>Loading...</h2>
                                ) : error ? (
                                    <h2>{error}</h2>
                                ) : (
                                    countries.map((country) => (
                                        <Country
                                            key={country._id}
                                            countryName={country.countryName}
                                            countryDescription={country.countryDescription}
                                            countryPhoto={country.countryPhoto}
                                            productId={country._id}
                                        />
                                    ))
                                )}
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
};
export default Catalog;

