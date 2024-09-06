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
exports.PosgradoEntity = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../estudiante/entities/estudiante.entity");
const profesor_entity_1 = require("../../profesor/entities/profesor.entity");
let PosgradoEntity = class PosgradoEntity extends typeorm_1.BaseEntity {
};
exports.PosgradoEntity = PosgradoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PosgradoEntity.prototype, "id_posgrado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PosgradoEntity.prototype, "facultad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PosgradoEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PosgradoEntity.prototype, "fecha_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PosgradoEntity.prototype, "fecha_culminacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PosgradoEntity.prototype, "matricula_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PosgradoEntity.prototype, "matricula_final", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PosgradoEntity.prototype, "categoria_cientifica", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PosgradoEntity.prototype, "tipo_posgrado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => estudiante_entity_1.EstudianteEntity, (estudiante) => estudiante.posgrado),
    __metadata("design:type", Object)
], PosgradoEntity.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profesor_entity_1.ProfesorEntity, (profesor) => profesor.posgrado),
    (0, typeorm_1.JoinColumn)({ name: 'id_profe' }),
    __metadata("design:type", Object)
], PosgradoEntity.prototype, "profesor", void 0);
exports.PosgradoEntity = PosgradoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "posgrado" })
], PosgradoEntity);
