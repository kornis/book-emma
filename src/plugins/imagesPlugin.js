import { ImagesContext } from "../datacontext/imageContext.js";
import { ImagesService } from "../services/imagesService.js";
import configs from "../configs/index.js";

export function imagesPlugin() {
    const ctx = new ImagesContext(configs.db_config)
    ctx.init()
    return (req, res, next) => {
        req.imagesService = new ImagesService(ctx)
        next()
    }
}