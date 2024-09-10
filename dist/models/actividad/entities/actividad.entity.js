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
exports.ActividadEntity = void 0;
const posgrado_entity_1 = require("./../../posgrado/entities/posgrado.entity");
const typeorm_1 = require("typeorm");
let ActividadEntity = class ActividadEntity extends typeorm_1.BaseEntity {
};
exports.ActividadEntity = ActividadEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ActividadEntity.prototype, "id_actividad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ActividadEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ActividadEntity.prototype, "fecha_act", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => posgrado_entity_1.PosgradoEntity, (posgrado) => posgrado.actividad, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_posgrado' }),
    __metadata("design:type", Object)
], ActividadEntity.prototype, "posgrado", void 0);
exports.ActividadEntity = ActividadEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "actividad" })
], ActividadEntity);
