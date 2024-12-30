// require('dotenv').config({ path: "./env" })
import connectDB from "./db/index.js";
import mongoose from "mongoose"
import dotenv from 'dotenv'
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})


connectDB()
    .then((res) => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`SERVER IS RUN  NING ON PORT ${process.env.PORT}`);

        })
    })
    .catch((err) => {
        console.log("MONGODB CONNECTION FAILED", err);

    })