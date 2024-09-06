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
const estudiante_entity_1 = require("../../estudiante/entities/estudiante.entity");
const posgrado_entity_1 = require("../../posgrado/entities/posgrado.entity");
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
            const repository = yield this.execRepository;
            // Buscar el posgrado por ID para asegurarse de que existe
            const posgrado = yield repository.manager.findOne(posgrado_entity_1.PosgradoEntity, {
                where: { id_posgrado: body.estudiante.posgrado },
            });
            if (!posgrado) {
                throw new Error(`No se encontró el posgrado con ID ${body.estudiante.posgrado}`);
            }
            // Crear una nueva instancia de EstudianteEntity
            const estudiante = new estudiante_entity_1.EstudianteEntity();
            estudiante.ci = body.estudiante.ci;
            estudiante.nombre_est = body.estudiante.nombre_est;
            estudiante.primer_apellido_est = body.estudiante.primer_apellido_est;
            estudiante.segundo_apellido_est = body.estudiante.segundo_apellido_est;
            estudiante.sexo = body.estudiante.sexo;
            estudiante.cuadro = body.estudiante.cuadro;
            estudiante.reserva = body.estudiante.reserva;
            estudiante.posgrado = body.estudiante.posgrado; // Asignar el posgrado al estudiante
            // Guardar el estudiante primero para obtener su ID
            const savedEstudiante = yield repository.manager.save(estudiante);
            // Crear una nueva instancia de DocenteEntity
            const docente = new docente_entity_1.DocenteEntity();
            docente.facultad_doc = body.facultad_doc;
            docente.estudiante = savedEstudiante; // Asignar el estudiante ya guardado al docente
            // Guardar el docente (esto debería asociar el estudiante ya guardado)
            return repository.save(docente);
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
