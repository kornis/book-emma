import express from "express"
import path from "path"
import cors from "cors"
import {fileURLToPath} from 'url';
import { imagesPlugin } from "./plugins/imagesPlugin.js"
import indexRoutes from "./routes/index.js"
const iPlugin = imagesPlugin()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT ?? 3000

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"))
app.use(express.static(path.join(__dirname,"../public")))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(iPlugin)

app.use("/", indexRoutes)

app.use("*", (req, res, next) => {
    return res.status(404).send("404 - Not Found")
})

app.listen(PORT, () => console.log("Server running on port " + PORT))

