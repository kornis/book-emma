import express from "express"
const router = express.Router()
import upload from "../middlewares/multer.js"

router.get("/", async (req, res) => {
    const service = req.imagesService
    const images = await service.getImages()
    return res.render("index", {images})
})

router.get("/single/:id", async (req, res) => {
    const service = req.imagesService
    const image = await service.getImage(req.params.id)
    return res.render("single", {image})
})

router.get("/admin2/login", (req, res) => {
    return res.send("login")
})

router.post("/admin2/login", (req, res) => {
    return res.send("login post")
})

router.get("/admin2/upload", (req, res) => {
    return res.render("loadImage")
})

router.post("/admin2/upload", upload.single("image"), async (req, res) => {
    const service = req.imagesService
    const response = await service.addImages(req.file.path)
    if(response) {
        return res.redirect("/")
    } else {
        return res.send("Error al guardar la imagen")
    }
})

export default router