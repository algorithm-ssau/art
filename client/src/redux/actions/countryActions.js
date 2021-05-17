import * as actionTypes from "../constants/countryConstants";
import axios from "axios";

export const getCountries = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_COUNTRIES_REQUEST });

        const { data } = await axios.get("/api/countries");
        dispatch({
            type: actionTypes.GET_COUNTRIES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_COUNTRIES_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getCountryDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_COUNTRIES_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/countries/${id}`);

        dispatch({
            type: actionTypes.GET_COUNTRIES_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_COUNTRIES_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const removeCountryDetails = () => (dispatch) => {
    dispatch({ type: actionTypes.GET_COUNTRIES_DETAILS_RESET });
};