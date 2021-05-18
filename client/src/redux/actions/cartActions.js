import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/countries/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            key: data._id,
            countryName: data.countryName,
            countryPhoto: data.countryPhoto,
            countryDescription: data.countryDescription,
            countryInformation: data.countryInformation,
            qty,
        },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};