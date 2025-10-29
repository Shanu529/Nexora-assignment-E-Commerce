

import mongoose from "mongoose";


const mongoDbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log("mongodb successfuly running");

        })
    } catch (error) {
        console.log("mongodb connection failded", error);

    }
}

export default mongoDbconnection;