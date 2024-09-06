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
exports.NoDocenteService = void 0;
const base_service_1 = require("../../../config/base.service");
const noDocente_entity_1 = require("../entities/noDocente.entity");
class NoDocenteService extends base_service_1.BaseService {
    constructor() {
        super(noDocente_entity_1.NoDocenteEntity);
    }
    // Servicio para obtener todos los no docentes
    findAllNoDocentes() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository)
                .find({
                relations: ["estudiante"],
                select: ["estudiante"]
            });
        });
    }
    // Servicio para obtener un no docente por ID
    findNoDocenteById(id_no_docente) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id_no_docente });
        });
    }
    // Servicio para crear un no docente
    createNoDocente(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const noDocente = noDocente_entity_1.NoDocenteEntity.create(body);
            return yield noDocente.save();
        });
    }
    // Servicio para eliminar un no docente
    deleteNoDocente(id_no_docente) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id_no_docente });
        });
    }
    // Servicio para actualizar un no docente
    updateNoDocente(id_no_docente, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id_no_docente, infoUpdate);
        });
    }
}
exports.NoDocenteService = NoDocenteService;
