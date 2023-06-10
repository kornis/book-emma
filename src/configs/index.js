import variables from "./variables.js";


export default {
    db_config: {
        username: variables.DB_CONFIGS_USER,
        password: variables.DB_CONFIGS_PASS,
        host: variables.DB_CONFIGS_HOST,
        dialect: variables.DB_CONFIGS_DIALECT,
        database: variables.DB_CONFIGS_DATABASE,
        port: variables.DB_CONFIGS_PORT
    }
}