import React from "react";
import {Link} from "react-router-dom";

const Country = ({countryName, countryPhoto, countryDescription, productId}) => {
    console.log(productId, countryName)
    return (

        <div className="grid1_of_3">
            <div className="grid1_of_3_img">
                <div>
                    <Link to = {`/countries/${productId}`}>
                        <img src={countryPhoto} alt=""/>
                    </Link>
                    <h4><a href={`/countries/${productId}`}>{countryName}</a></h4>
                    <p>{countryDescription} </p>
                </div>
            </div>
        </div>
    )
}

export default Country;