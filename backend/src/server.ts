import app from './app';
import config from './config/config';



const startApp = async () => {
    //await runDB
    app.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`)
    });
}
startApp();