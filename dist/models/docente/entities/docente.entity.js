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
exports.DocenteEntity = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../estudiante/entities/estudiante.entity");
let DocenteEntity = class DocenteEntity extends typeorm_1.BaseEntity {
};
exports.DocenteEntity = DocenteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DocenteEntity.prototype, "id_docente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DocenteEntity.prototype, "facultad_doc", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => estudiante_entity_1.EstudianteEntity, (estudiante) => estudiante.docente, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_estudiante' }),
    __metadata("design:type", estudiante_entity_1.EstudianteEntity)
], DocenteEntity.prototype, "estudiante", void 0);
exports.DocenteEntity = DocenteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "docente" })
], DocenteEntity);
