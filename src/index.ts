import {Server, View} from "grandjs";
View.settings.set("views", "/src/views");
import {initRoutes} from "./routes/init"
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
Server.setConfig({
    port: 3000,
    nativeParsing: true
})


Server.use(<any>cookieParser("cookies"))
Server.use(<any>session({cookie: {maxAge: 6000}, secret: "test session"}))
Server.use(<any>flash())

// init server
Server.initServer(() => {
    console.log("server now i running")
    // initialize routes
    initRoutes();
})

Server.static({
    url: "/assets",
    path: path.join(process.cwd(), "src/assets")
})