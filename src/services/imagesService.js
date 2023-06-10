

export class ImagesService {
    constructor(ImagesContext) {
        this.ImagesContext = ImagesContext
    }

    async addImages(path) {
        console.log("el path", path)
        const response = await this.ImagesContext.addImages(path)
        return response
    }

    async getImages() {
        return await this.ImagesContext.getImages()
    }

    async getImage(id) {
        return await this.ImagesContext.getImage(id)
    }
}