"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadController = void 0;
const actividad_services_1 = require("../services/actividad.services");
class ActividadController {
    constructor(actividadService = new actividad_services_1.ActividadService()) {
        this.actividadService = actividadService;
    }
    // Obtener todos los Actividads
    getActividades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.actividadService.findAllActividades();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al obtener las Actividades" });
            }
        });
    }
    // Obtener un Actividad por ID
    getActividadById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.actividadService.findActividadById(Number(id));
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al obtener la Actividad" });
            }
        });
    }
    // Crear un nuevo Actividad
    createActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.actividadService.createActividad(req.body);
                res.status(201).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al crear la Actividad" });
            }
        });
    }
    // Actualizar un Actividad
    updateActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.actividadService.updateActividad(Number(id), req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al actualizar la Actividad" });
            }
        });
    }
    // Eliminar un Actividad
    deleteActividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.actividadService.deleteActividad(Number(id));
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al eliminar la Actividad" });
            }
        });
    }
}
exports.ActividadController = ActividadController;
