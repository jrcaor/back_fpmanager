import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entities/Usuario"
import { Alumno } from "./entities/Alumno"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "invoices",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entities/*.ts"],
    migrations: [],
    subscribers: [],
})
