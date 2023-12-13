const {connect} = require("mongoose");

const url = process.env.MONGO_URL;

const mongooseConnection = connect(url);

module.exports = mongooseConnection;