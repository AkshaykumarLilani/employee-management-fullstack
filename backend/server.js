require("dotenv").config();
const express = require('express');
const mongooseConnection = require('./configs/db');
const cors = require('cors');
const authRoutes = require("./routes/auth.route");
const employeeRoutes = require("./routes/employee.route");
const errorHandler = require("./middlewares/error.middleware");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));

// routes
app.use("/", authRoutes);
app.use("/employees", employeeRoutes);

// error handler
app.use(errorHandler);

// Connection
const PORT = process.env.PORT || 3018;

const onServerConnection = async () => {
    console.log(`Server is now listening at port:${PORT}`);
    try{
        await mongooseConnection;
        console.log("MongoDB Connected");
    } catch(err) {
        console.error("Error connecting to MongoDB", err);
    }
}

app.listen(PORT, onServerConnection);