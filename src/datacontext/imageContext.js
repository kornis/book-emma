import { Sequelize, DataTypes } from "sequelize";

export class ImagesContext {
    constructor(configs) {
        this.Sequelize = new Sequelize(configs)
    }

    defineImages() {
        return this.Sequelize.define('images', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            path: {
                type: DataTypes.STRING
            }
        }, {
            timestamps: false
        })
    }

    async init() {
        this.Images = this.defineImages()

        try {
            await this.Sequelize.sync()
        } catch (error) {
            console.log(error)
        }
    }

    async addImages(path) {
        try {
            const response = await this.Images.create({path})
            return response
        } catch (error) {
            throw new Error( error)
        }
    }

    async getImages() {
        try {
            return await this.Images.findAll()
        } catch(error) {
            throw new Error(error)
        }
    }

    async getImage(id) {
        try {
            return await this.Images.findByPk(id)
        } catch(error) {
            throw new Error(error)
        }
    }
}

