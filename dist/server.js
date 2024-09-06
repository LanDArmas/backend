"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const ormconfig_1 = __importDefault(require("./config/ormconfig"));
const docente_router_1 = require("./models/docente/docente.router");
const noDocente_router_1 = require("./models/noDocente/noDocente.router");
const doctorado_router_1 = require("./models/doctorado/doctorado.router");
const estudiante_router_1 = require("./models/estudiante/estudiante.router");
const posgrado_router_1 = require("./models/posgrado/posgrado.router");
const profesor_router_1 = require("./models/profesor/profesor.router");
class servidor extends config_1.ConfigServer {
    routers() {
        return [new docente_router_1.DocenteRouter().router,
            new noDocente_router_1.NoDocenteRouter().router,
            new doctorado_router_1.DoctoradoRouter().router,
            new estudiante_router_1.EstudianteRouter().router,
            new posgrado_router_1.PosgradoRouter().router,
            new profesor_router_1.ProfesorRouter().router,
        ];
    }
    //constructor de la clase
    constructor() {
        super();
        this.app = (0, express_1.default)();
        this.port = 8000;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use('/api', this.routers());
        ormconfig_1.default;
        this.listen();
    }
    //funcion de escucha del puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor ecuchando por el puerto =>" + this.port);
        });
    }
}
new servidor;
