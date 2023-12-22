import { config } from "dotenv";
import app from "./app.js";
import cors from 'cors'
import { connectDatabase } from "./config/dbConnections.js";
config({ path: "./.env" });
connectDatabase();
app.use(cors())
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})