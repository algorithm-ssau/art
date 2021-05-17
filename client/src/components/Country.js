import React from "react";

const Country = ({countryName, countryPhoto, countryDescription}) => {
    return (

            <div className="grid1_of_3">
                <div className="grid1_of_3_img">
        <div>
            <a href="details.html">
                <img src={countryPhoto} alt=""/>
                <span className="next"> </span>
            </a>
         <h4><a href="#">{countryName}</a></h4>
         <p>{countryDescription} </p>
        </div>
                </div>
            </div>
    )
}

export default Country;
