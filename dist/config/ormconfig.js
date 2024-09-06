"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const estudiante_entity_1 = require("../models/estudiante/entities/estudiante.entity");
const noDocente_entity_1 = require("../models/noDocente/entities/noDocente.entity");
const docente_entity_1 = require("../models/docente/entities/docente.entity");
const posgrado_entity_1 = require("../models/posgrado/entities/posgrado.entity");
const profesor_entity_1 = require("../models/profesor/entities/profesor.entity");
const doctorado_entity_1 = require("../models/doctorado/entities/doctorado.entity");
dotenv_1.default.config();
const connectDB = new typeorm_1.DataSource({
    type: "postgres", // en caso de postgree es postgree
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "posgrado",
    logging: false,
    synchronize: true,
    entities: [estudiante_entity_1.EstudianteEntity, noDocente_entity_1.NoDocenteEntity, docente_entity_1.DocenteEntity, posgrado_entity_1.PosgradoEntity, profesor_entity_1.ProfesorEntity, doctorado_entity_1.DoctoradoEntity],
    // migrations: [__dirname + "../../src/migrations/*{.ts, .js}"],
    //ssl: false,
    // extra: {
    //     ssl: {
    //         rejectUnauthorized: false
    //     }
    // }
});
connectDB
    .initialize()
    .then(() => {
    console.log(`Conectado a la Base de Datos`);
})
    .catch((err) => {
    console.error(`Error al conectar a la Base de Datos`, err);
});
exports.default = connectDB;
