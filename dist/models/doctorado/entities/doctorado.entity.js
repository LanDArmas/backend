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
exports.DoctoradoEntity = void 0;
// src/doctorado/entities/doctorado.entity.ts
const typeorm_1 = require("typeorm");
const profesor_entity_1 = require("../../profesor/entities/profesor.entity");
let DoctoradoEntity = class DoctoradoEntity extends typeorm_1.BaseEntity {
};
exports.DoctoradoEntity = DoctoradoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DoctoradoEntity.prototype, "id_doctorado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctoradoEntity.prototype, "nombre_programa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctoradoEntity.prototype, "modalidad_doc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DoctoradoEntity.prototype, "edad_doctor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], DoctoradoEntity.prototype, "territorio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctoradoEntity.prototype, "area_ciencia", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profesor_entity_1.ProfesorEntity, (profesor) => profesor.doctorado, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_profe' }) // Asegurarse de que está correctamente relacionado
    ,
    __metadata("design:type", profesor_entity_1.ProfesorEntity)
], DoctoradoEntity.prototype, "profesor", void 0);
exports.DoctoradoEntity = DoctoradoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "doctorado" })
], DoctoradoEntity);
