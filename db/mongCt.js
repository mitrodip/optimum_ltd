import mongoose from "mongoose";
const dBconnect = async(URL) => {
    try {
        const db_option = {
            dbName: "optimum"

        }
        await mongoose.connect(URL, db_option)
        console.log(`i am conect`)

    } catch (error) {
        console.log(error)
    }
}
export default dBconnect