import mongoose from 'mongoose'
import { DB_NAME } from '../consants.js'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONDO DB CONNECTED ! HOST BY: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("MONGODB CONNECTION ERROR: ", error);
    }
}

export default connectDB