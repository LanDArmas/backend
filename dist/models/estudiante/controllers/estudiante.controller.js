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
exports.EstudianteController = void 0;
const estudiante_services_1 = require("../services/estudiante.services");
class EstudianteController {
    constructor(estudianteService = new estudiante_services_1.EstudianteService()) {
        this.estudianteService = estudianteService;
    }
    getEstudiantes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estudiantes = yield this.estudianteService.findAllEstudiantes();
                res.status(200).json(estudiantes);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al obtener los estudiantes" });
            }
        });
    }
    getEstudianteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const estudiante = yield this.estudianteService.findEstudianteById(Number(id));
                if (estudiante) {
                    res.status(200).json(estudiante);
                }
                else {
                    res.status(404).json({ error: "Estudiante no encontrado" });
                }
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al obtener el estudiante" });
            }
        });
    }
    getEstudianteByIdPosgrado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const estudiantes = yield this.estudianteService.findEstudiantesByPosgradoId(Number(id));
                if (estudiantes) {
                    res.status(200).json(estudiantes);
                }
                else {
                    res.status(404).json({ error: "Estudiantes no encontrados" });
                }
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: "Error al obtener a los estudiantes" });
            }
        });
    }
    createEstudiante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.estudianteService.createEstudiante(req.body);
                res.status(201).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(400).json({ error: e instanceof Error ? e.message : "Error al crear el estudiante" });
            }
        });
    }
    updateEstudiante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.estudianteService.updateEstudiante(Number(id), req.body);
                if (data.affected) {
                    res.status(200).json({ message: "Estudiante actualizado con éxito" });
                }
                else {
                    res.status(404).json({ error: "Estudiante no encontrado" });
                }
            }
            catch (e) {
                console.error(e);
                res.status(400).json({ error: e instanceof Error ? e.message : "Error al actualizar el estudiante" });
            }
        });
    }
    deleteEstudiante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.estudianteService.deleteEstudiante(Number(id));
                if (data.affected) {
                    res.status(200).json({ message: "Estudiante eliminado con éxito" });
                }
                else {
                    res.status(404).json({ error: "Estudiante no encontrado" });
                }
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: e instanceof Error ? e.message : "Error al eliminar el estudiante" });
            }
        });
    }
    countByPosgrado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.estudianteService.findCountByPosgrado();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: e instanceof Error ? e.message : "Error al obtener los datos" });
            }
        });
    }
    countEstudiantesByTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.estudianteService.countEstudiantesByTipo();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: e instanceof Error ? e.message : "Error al obtener los datos" });
            }
        });
    }
}
exports.EstudianteController = EstudianteController;
