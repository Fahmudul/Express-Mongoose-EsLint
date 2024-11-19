import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";
// database connection
async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);
    app.listen(config.port, () => {
      console.log("Server running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}
main()