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
exports.DoctoradoService = void 0;
const base_service_1 = require("../../../config/base.service");
const doctorado_entity_1 = require("../entities/doctorado.entity");
class DoctoradoService extends base_service_1.BaseService {
    constructor() {
        super(doctorado_entity_1.DoctoradoEntity);
    }
    // servicio para obtener todos los Doctorados
    findAllDoctorados() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository)
                .find({
                relations: ['profesor'],
                select: ['profesor']
            });
        });
    }
    // servicio para obtener un Doctorados según id
    findDoctoradoById(id_doctorado) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id_doctorado });
        });
    }
    // servicio para crear un Doctorado
    createDoctorado(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).save(body);
        });
    }
    // eliminar un Doctorado
    deleteDoctorado(id_doctorado) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id_doctorado });
        });
    }
    // actualizar un Doctorado
    updateDoctorado(id_doctorado, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id_doctorado, infoUpdate);
        });
    }
}
exports.DoctoradoService = DoctoradoService;
