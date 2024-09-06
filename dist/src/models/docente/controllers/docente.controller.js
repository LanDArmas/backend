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
exports.DocenteController = void 0;
const docente_services_1 = require("../services/docente.services");
class DocenteController {
    constructor(docenteService = new docente_services_1.DocenteService()) {
        this.docenteService = docenteService;
    }
    // Obtener todos los docentes
    getDocentes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.docenteService.findAllDocentes();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al obtener los docentes" });
            }
        });
    }
    // Obtener un docente por ID
    getDocenteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.docenteService.findDocenteById(Number(id));
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al obtener el docente" });
            }
        });
    }
    // Crear un nuevo docente
    createDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.docenteService.createDocente(req.body);
                res.status(201).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al crear el docente" });
            }
        });
    }
    // Actualizar un docente
    updateDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.docenteService.updateDocente(Number(id), req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al actualizar el docente" });
            }
        });
    }
    // Eliminar un docente
    deleteDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.docenteService.deleteDocente(Number(id));
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al eliminar el docente" });
            }
        });
    }
}
exports.DocenteController = DocenteController;
