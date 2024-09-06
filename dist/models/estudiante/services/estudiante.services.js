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
exports.EstudianteService = void 0;
const base_service_1 = require("../../../config/base.service");
const estudiante_entity_1 = require("../entities/estudiante.entity");
class EstudianteService extends base_service_1.BaseService {
    constructor() {
        super(estudiante_entity_1.EstudianteEntity);
    }
    findAllEstudiantes() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository)
                .find({
                relations: ['posgrado', 'docente', 'noDocente'],
                select: ['posgrado', 'docente', 'noDocente']
            });
        });
    }
    findEstudianteById(id_estudiante) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id_estudiante });
        });
    }
    findEstudiantesByPosgradoId(id_posgrado) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository)
                .createQueryBuilder('estudiante')
                .innerJoinAndSelect('estudiante.posgrado', 'posgrado')
                .where('posgrado.id_posgrado = :id_posgrado', { id_posgrado })
                .getMany();
        });
    }
    findCountByPosgrado() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = (yield this.execRepository).createQueryBuilder('estudiante')
                .select('estudiante.posgrado.id_posgrado AS id_posgrado')
                .addSelect('COUNT(CASE WHEN estudiante.docente IS NOT NULL THEN 1 ELSE NULL END) AS docentes')
                .addSelect('COUNT(CASE WHEN estudiante.noDocente IS NOT NULL THEN 1 ELSE NULL END) AS noDocentes')
                .addSelect('COUNT(CASE WHEN estudiante.sexo = \'F\' THEN 1 ELSE NULL END) AS mujeres')
                .addSelect('COUNT(CASE WHEN estudiante.cuadro = true THEN 1 ELSE NULL END) AS cuadros')
                .addSelect('COUNT(CASE WHEN estudiante.reserva = true THEN 1 ELSE NULL END) AS reservas')
                .groupBy('estudiante.posgrado.id_posgrado');
            const results = yield query.getRawMany();
            return results;
        });
    }
    createEstudiante(body) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(body)
            // const estudiante = new EstudianteEntity();
            // estudiante.id_estudiante = body.id_estudiante;
            // estudiante.ci = body.ci;
            // estudiante.nombre_est = body.nombre_est;
            // estudiante.primer_apellido_est = body.primer_apellido_est;
            // estudiante.segundo_apellido_est = body.segundo_apellido_est;
            // estudiante.sexo = body.sexo;
            // estudiante.cuadro = body.cuadro;
            // estudiante.reserva = body.reserva;
            // estudiante.posgrado = body.id_posgrado;
            // //estudiante.docente = body.docente;
            // const docente = new DocenteEntity();
            // docente.facultad_doc = body.docente.facultad_doc;
            return (yield this.execRepository).save(body);
        });
    }
    deleteEstudiante(id_estudiante) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id_estudiante });
        });
    }
    updateEstudiante(id_estudiante, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id_estudiante, infoUpdate);
        });
    }
}
exports.EstudianteService = EstudianteService;
