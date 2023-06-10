import * as dotenv from 'dotenv'
dotenv.config()
console.log("yo primero")
export default {
    DB_CONFIGS_USER: process.env.DB_CONFIGS_USER,
    DB_CONFIGS_PASS: process.env.DB_CONFIGS_PASS,
    DB_CONFIGS_HOST: process.env.DB_CONFIGS_HOST,
    DB_CONFIGS_DIALECT: process.env.DB_CONFIGS_DIALECT,
    DB_CONFIGS_DATABASE: process.env.DB_CONFIGS_DATABASE,
    DB_CONFIGS_PORT: process.env.DB_CONFIGS_PORT
}
