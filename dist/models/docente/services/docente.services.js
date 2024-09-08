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
exports.DocenteService = void 0;
const base_service_1 = require("../../../config/base.service");
const docente_entity_1 = require("../entities/docente.entity");
class DocenteService extends base_service_1.BaseService {
    constructor() {
        super(docente_entity_1.DocenteEntity);
    }
    // Servicio para obtener todos los docentes
    findAllDocentes() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository)
                .find({
                relations: ["estudiante"],
                select: ['estudiante']
            });
        });
    }
    // Servicio para obtener un docente por ID
    findDocenteById(id_docente) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id_docente });
        });
    }
    // Servicio para crear un docente
    createDocente(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const docente = docente_entity_1.DocenteEntity.create(body);
            return yield docente.save();
        });
    }
    // Servicio para eliminar un docente
    deleteDocente(id_docente) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id_docente });
        });
    }
    // Servicio para actualizar un docente
    updateDocente(id_docente, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id_docente, infoUpdate);
        });
    }
}
exports.DocenteService = DocenteService;
