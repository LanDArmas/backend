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
exports.DoctoradoController = void 0;
const doctorado_services_1 = require("../services/doctorado.services");
class DoctoradoController {
    constructor(doctoradoService = new doctorado_services_1.DoctoradoService()) {
        this.doctoradoService = doctoradoService;
    }
    ;
    // obtain all users
    getDoctorados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.doctoradoService.findAllDoctorados();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    // obtain an user by id
    getDoctoradoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.doctoradoService.findDoctoradoById(Number(id));
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    //crete a new user
    createDoctorado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.doctoradoService.createDoctorado(req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    //modify an user
    updateDoctorado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.doctoradoService.updateDoctorado(Number(id), req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    //remove an user
    deleteDoctorado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.doctoradoService.deleteDoctorado(Number(id));
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    countDoctorados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.doctoradoService.countDoctorados();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ error: e instanceof Error ? e.message : "Error al obtener los datos" });
            }
        });
    }
}
exports.DoctoradoController = DoctoradoController;
