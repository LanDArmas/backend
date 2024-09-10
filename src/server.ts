import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from "./config/config";
import connectDB from "./config/ormconfig";
import { DocenteRouter } from './models/docente/docente.router';
import { NoDocenteRouter } from './models/noDocente/noDocente.router';
import { DoctoradoRouter } from './models/doctorado/doctorado.router';
import { EstudianteRouter } from './models/estudiante/estudiante.router';
import { PosgradoRouter } from './models/posgrado/posgrado.router';
import { ProfesorRouter } from './models/profesor/profesor.router';
import { ActividadRouter } from './models/actividad/actividad.router';



class servidor extends ConfigServer {
    routers(): Array<express.Router> {
	 	return [new DocenteRouter().router, 
                new NoDocenteRouter().router,
                new DoctoradoRouter().router,
                new EstudianteRouter().router,
                new PosgradoRouter().router,
                new ProfesorRouter().router,
                new ActividadRouter().router
            ];
	 }

public app: express.Application = express();
	private port: number = 8000;
    //constructor de la clase
	constructor(){
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use('/api', this.routers());
        connectDB;
        this.listen();
    }
    //funcion de escucha del puerto
	public listen(){
		this.app.listen(this.port, () => {
		   console.log("Servidor ecuchando por el puerto =>" + this.port );
		});
	}
}

new servidor;
