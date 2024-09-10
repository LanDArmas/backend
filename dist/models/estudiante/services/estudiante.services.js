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
            const query = (yield this.execRepository)
                .createQueryBuilder('estudiante')
                .innerJoin('estudiante.posgrado', 'posgrado') // Hacemos un join con la tabla de posgrado
                .select('posgrado.nombre AS nombre') // Nombre del posgrado
                .addSelect('posgrado.matricula_inicial AS matricula_inicial') // Matrícula inicial del posgrado
                .addSelect('posgrado.matricula_final AS matricula_final') // Matrícula final del posgrado
                .addSelect('COUNT(CASE WHEN estudiante.sexo = \'F\' THEN 1 ELSE NULL END) AS mujeres') // Cantidad de mujeres
                .addSelect('COUNT(CASE WHEN estudiante.cuadro = true THEN 1 ELSE NULL END) AS cuadros') // Cantidad de cuadros
                .addSelect('COUNT(CASE WHEN estudiante.reserva = true THEN 1 ELSE NULL END) AS reservas') // Cantidad de reservas
                .groupBy('posgrado.nombre, posgrado.matricula_inicial, posgrado.matricula_final'); // Agrupamos por los campos de posgrado
            const results = yield query.getRawMany();
            return results;
        });
    }
    createEstudiante(body) {
        return __awaiter(this, void 0, void 0, function* () {
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
    countEstudiantesByTipo() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository)
                .createQueryBuilder('estudiante')
                .select('COUNT(CASE WHEN estudiante.docente IS NOT NULL THEN 1 ELSE NULL END)', 'estudiantes_docentes')
                .addSelect('COUNT(CASE WHEN estudiante.noDocente IS NOT NULL THEN 1 ELSE NULL END)', 'estudiantes_no_docentes')
                .leftJoinAndSelect('estudiante.docente', 'docente')
                .leftJoinAndSelect('estudiante.noDocente', 'noDocente')
                .getRawMany();
        });
    }
}
exports.EstudianteService = EstudianteService;
