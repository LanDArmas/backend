"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteEntity = void 0;
const typeorm_1 = require("typeorm");
const docente_entity_1 = require("../../docente/entities/docente.entity");
const noDocente_entity_1 = require("../../noDocente/entities/noDocente.entity");
const posgrado_entity_1 = require("../../posgrado/entities/posgrado.entity");
let EstudianteEntity = class EstudianteEntity extends typeorm_1.BaseEntity {
};
exports.EstudianteEntity = EstudianteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EstudianteEntity.prototype, "id_estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", unsigned: true, unique: true, }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "ci", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "nombre_est", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "primer_apellido_est", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "segundo_apellido_est", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 1 }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], EstudianteEntity.prototype, "cuadro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], EstudianteEntity.prototype, "reserva", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => docente_entity_1.DocenteEntity, (docente) => docente.estudiante, { cascade: true, }),
    __metadata("design:type", docente_entity_1.DocenteEntity)
], EstudianteEntity.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => noDocente_entity_1.NoDocenteEntity, (noDocente) => noDocente.estudiante, { cascade: true, }),
    __metadata("design:type", noDocente_entity_1.NoDocenteEntity)
], EstudianteEntity.prototype, "noDocente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => posgrado_entity_1.PosgradoEntity, (posgrado) => posgrado.estudiante, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_posgrado' }),
    __metadata("design:type", Object)
], EstudianteEntity.prototype, "posgrado", void 0);
exports.EstudianteEntity = EstudianteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "estudiante" })
], EstudianteEntity);
