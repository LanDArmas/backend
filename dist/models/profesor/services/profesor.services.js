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
exports.ProfesorService = void 0;
const base_service_1 = require("../../../config/base.service");
const profesor_entity_1 = require("../entities/profesor.entity");
class ProfesorService extends base_service_1.BaseService {
    constructor() {
        super(profesor_entity_1.ProfesorEntity);
    }
    // Servicio para obtener todos los Profesores
    findAllProfesors() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository)
                .find({
                relations: ['doctorado'],
                select: ['doctorado']
            });
        });
    }
    // Servicio para obtener un Profesor según id
    findProfesorById(id_profe) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id_profe });
        });
    }
    // Servicio para crear un Profesor
    createProfesor(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).save(body);
        });
    }
    // Eliminar un Profesor
    deleteProfesor(id_profe) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id_profe });
        });
    }
    // Actualizar un Profesor
    updateProfesor(id_profe, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (yield this.execRepository).update(id_profe, infoUpdate);
            }
            catch (error) {
                if (error instanceof Error && error.name === 'QueryFailedError' && error.code === '23505') {
                    // Manejar error de duplicado para PostgreSQL (código de error 23505)
                    throw new Error("El CI del profesor ya existe.");
                }
                else {
                    throw error;
                }
            }
        });
    }
}
exports.ProfesorService = ProfesorService;
