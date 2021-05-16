const Country = require('../models/Country');

const getAllCountries = async (res, req) => {
    try {
        const countries = await Country.find({});
        res.json(countries)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});

    }
}
const getCountryById = async (res, req) => {
    try {
        const country = await Country.findByID(req.params.id);
        res.json(countries)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});

    }
}

module.exports = {
    getAllCountries,
    getCountryById,
}