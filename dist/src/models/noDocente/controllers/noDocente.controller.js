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
exports.NoDocenteController = void 0;
const noDocente_services_1 = require("../services/noDocente.services");
class NoDocenteController {
    constructor(noDocenteService = new noDocente_services_1.NoDocenteService()) {
        this.noDocenteService = noDocenteService;
    }
    // Obtener todos los no docentes
    getNoDocentes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.noDocenteService.findAllNoDocentes();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al obtener los no docentes" });
            }
        });
    }
    // Obtener un no docente por ID
    getNoDocenteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.noDocenteService.findNoDocenteById(Number(id));
                if (data) {
                    res.status(200).json(data);
                }
                else {
                    res.status(404).json({ error: "No docente no encontrado" });
                }
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al obtener el no docente" });
            }
        });
    }
    // Crear un nuevo no docente
    createNoDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.noDocenteService.createNoDocente(req.body);
                res.status(201).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al crear el no docente" });
            }
        });
    }
    // Actualizar un no docente
    updateNoDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const updateResult = yield this.noDocenteService.updateNoDocente(Number(id), req.body);
                if (updateResult.affected) {
                    res.status(200).json({ message: "No docente actualizado correctamente" });
                }
                else {
                    res.status(404).json({ error: "No docente no encontrado" });
                }
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al actualizar el no docente" });
            }
        });
    }
    // Eliminar un no docente
    deleteNoDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deleteResult = yield this.noDocenteService.deleteNoDocente(Number(id));
                if (deleteResult.affected) {
                    res.status(200).json({ message: "No docente eliminado correctamente" });
                }
                else {
                    res.status(404).json({ error: "No docente no encontrado" });
                }
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al eliminar el no docente" });
            }
        });
    }
}
exports.NoDocenteController = NoDocenteController;
