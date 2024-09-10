import { ActividadEntity } from './../models/actividad/entities/actividad.entity';
import { DataSource } from "typeorm";
import  dotenv  from "dotenv";
import { EstudianteEntity } from "../models/estudiante/entities/estudiante.entity";
import { NoDocenteEntity } from "../models/noDocente/entities/noDocente.entity";
import { DocenteEntity } from "../models/docente/entities/docente.entity";
import { PosgradoEntity } from "../models/posgrado/entities/posgrado.entity";
import { ProfesorEntity } from "../models/profesor/entities/profesor.entity";
import { DoctoradoEntity } from "../models/doctorado/entities/doctorado.entity";

dotenv.config();
const connectDB = new DataSource({
    type: "postgres", // en caso de postgree es postgree
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "posgrado",
    logging: false,
    synchronize: true,
    entities: [EstudianteEntity,NoDocenteEntity,DocenteEntity,ActividadEntity,PosgradoEntity,ProfesorEntity,DoctoradoEntity],
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
    })
    export default connectDB;
