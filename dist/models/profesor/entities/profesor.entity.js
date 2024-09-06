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
exports.ProfesorEntity = void 0;
// src/profesor/entities/profesor.entity.ts
const doctorado_entity_1 = require("./../../doctorado/entities/doctorado.entity");
const typeorm_1 = require("typeorm");
const posgrado_entity_1 = require("../../posgrado/entities/posgrado.entity");
let ProfesorEntity = class ProfesorEntity extends typeorm_1.BaseEntity {
};
exports.ProfesorEntity = ProfesorEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProfesorEntity.prototype, "id_profe", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfesorEntity.prototype, "nombre_profe", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfesorEntity.prototype, "apellidos_profe", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", unsigned: true, unique: true }),
    __metadata("design:type", Number)
], ProfesorEntity.prototype, "ci_profe", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 1 }),
    __metadata("design:type", String)
], ProfesorEntity.prototype, "sexo_profe", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfesorEntity.prototype, "formacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => posgrado_entity_1.PosgradoEntity, (posgrado) => posgrado.profesor),
    __metadata("design:type", Array)
], ProfesorEntity.prototype, "posgrado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => doctorado_entity_1.DoctoradoEntity, (doctorado) => doctorado.profesor, { nullable: true, cascade: true }) // Relación opcional
    ,
    __metadata("design:type", doctorado_entity_1.DoctoradoEntity)
], ProfesorEntity.prototype, "doctorado", void 0);
exports.ProfesorEntity = ProfesorEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "profesor" })
], ProfesorEntity);
