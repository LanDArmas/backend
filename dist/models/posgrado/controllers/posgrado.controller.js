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
exports.PosgradoController = void 0;
const posgrado_services_1 = require("../services/posgrado.services");
class PosgradoController {
    constructor(posgradoService = new posgrado_services_1.PosgradoService()) {
        this.posgradoService = posgradoService;
    }
    getPosgrados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("sdfsfsf");
                const posgrados = yield this.posgradoService.findAllPosgrados();
                res.status(200).json(posgrados);
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(500).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Error desconocido al obtener los posgrados" });
                }
            }
        });
    }
    getPosgradoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const posgrado = yield this.posgradoService.findPosgradoById(Number(id));
                if (posgrado) {
                    res.status(200).json(posgrado);
                }
                else {
                    res.status(404).json({ error: "Posgrado no encontrado" });
                }
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(500).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Error desconocido al obtener el posgrado" });
                }
            }
        });
    }
    findCountByPosgrado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const statistics = yield this.posgradoService.findCountByPosgrado();
                res.status(200).json(statistics);
            }
            catch (error) {
                console.error('Error in getStatistics:', error);
                res.status(500).json({ message: 'Error retrieving statistics' });
            }
        });
    }
    findPosgradoWithActividades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const posgrado = yield this.posgradoService.findPosgradoWithActividades(Number(id));
                if (!posgrado) {
                    res.status(404).json({ message: 'Posgrado no encontrado' });
                }
                else {
                    res.status(200).json(posgrado);
                }
            }
            catch (error) {
                console.error('Error in findPosgradoWithActividades:', error);
                res.status(500).json({ message: 'Error retrieving posgrado with activities' });
            }
        });
    }
    createPosgrado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dto = req.body;
                const data = yield this.posgradoService.createPosgrado(dto);
                res.status(201).json(data);
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(400).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Error desconocido al crear el posgrado" });
                }
            }
        });
    }
    updatePosgrado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const dto = req.body;
                yield this.posgradoService.updatePosgrado(Number(id), dto);
                res.status(200).json({ message: "Posgrado actualizado con éxito" });
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(400).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Error desconocido al actualizar el posgrado" });
                }
            }
        });
    }
    deletePosgrado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this.posgradoService.deletePosgrado(Number(id));
                if (result.affected) {
                    res.status(200).json({ message: "Posgrado eliminado con éxito" });
                }
                else {
                    res.status(404).json({ error: "Posgrado no encontrado" });
                }
            }
            catch (e) {
                console.error(e);
                if (e instanceof Error) {
                    res.status(500).json({ error: e.message });
                }
                else {
                    res.status(500).json({ error: "Error desconocido al eliminar el posgrado" });
                }
            }
        });
    }
}
exports.PosgradoController = PosgradoController;
