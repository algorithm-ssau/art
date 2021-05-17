import * as actionTypes from "../constants/countryConstants";

export const getCountriesReducer = (state = { countries: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_COUNTRIES_REQUEST:
            return {
                loading: true,
                countries: [],
            };
        case actionTypes.GET_COUNTRIES_SUCCESS:
            return {
                countries: action.payload,
                loading: false,
            };
        case actionTypes.GET_COUNTRIES_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getCountryDetailsReducer = (state = { country: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_COUNTRIES_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_COUNTRIES_DETAILS_SUCCESS:
            return {
                loading: false,
                country: action.payload,
            };
        case actionTypes.GET_COUNTRIES_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case actionTypes.GET_COUNTRIES_DETAILS_RESET:
            return {
                country: {},
            };
        default:
            return state;
    }
};