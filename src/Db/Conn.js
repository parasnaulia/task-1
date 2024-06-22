const mongoose = require("mongoose");
async function Connection() {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://parasnaulia645:nx7w2cQ4pHnjfTbl@cluster0.ivdbulp.mongodb.net/parasnaulia645"
    );
    console.log("Connection is Established");
  } catch (e) {
    console.log(e + "No Connection");
  }
}
module.exports = Connection;
