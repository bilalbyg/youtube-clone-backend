const express = require("express")
const config = require("./config")
const loaders = require("./loaders")
const { UserRoutes, ChannelRoutes, VideoRoutes } = require("./routes")
const app = express()

config()
loaders()

app.use(express.json());

app.listen(5000, () => {
    console.log("Server Up");
    console.log(process.env.PORT);
    app.use("/users", UserRoutes)
    app.use("/channels", ChannelRoutes)
    app.use("/videos", VideoRoutes)
})