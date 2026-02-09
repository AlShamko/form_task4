import app from './app';
import config from './config/config';
import {runDB} from "./repositories/db";



const startApp = async () => {
    try {
        console.log("Attempting to connect to DB...");
        await runDB();
        console.log("DB connected, starting server...");

        app.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
        });
    } catch (err) {
        console.error("FATAL ERROR DURING STARTUP:");
        console.error(err);
        process.exit(1);
    }
};

