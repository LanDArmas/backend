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
exports.ActividadService = void 0;
const base_service_1 = require("../../../config/base.service");
const actividad_entity_1 = require("../entities/actividad.entity");
class ActividadService extends base_service_1.BaseService {
    constructor() {
        super(actividad_entity_1.ActividadEntity);
    }
    // servicio para obtener todos los actividads
    findAllActividades() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository)
                .find({
                relations: ['posgrado'],
                select: ['posgrado']
            });
        });
    }
    // servicio para obtener un actividads según id
    findActividadById(id_actividad) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id_actividad });
        });
    }
    // servicio para crear un actividad
    createActividad(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).save(body);
        });
    }
    // eliminar un actividad
    deleteActividad(id_actividad) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id_actividad });
        });
    }
    // actualizar un actividad
    updateActividad(id_actividad, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id_actividad, infoUpdate);
        });
    }
}
exports.ActividadService = ActividadService;
