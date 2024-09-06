"use strict";
// posgrado.service.test.ts
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
const posgrado_services_1 = require("../src/models/posgrado/services/posgrado.services");
const posgrado_entity_1 = require("../src/models/posgrado/entities/posgrado.entity");
const globals_1 = require("@jest/globals");
globals_1.jest.mock('typeorm', () => ({
    Repository: globals_1.jest.fn(),
}));
describe('PosgradoService', () => {
    let posgradoService;
    let mockRepository;
    beforeEach(() => {
        mockRepository = {
            find: globals_1.jest.fn(),
            findOneBy: globals_1.jest.fn(),
            save: globals_1.jest.fn(),
            update: globals_1.jest.fn(),
            delete: globals_1.jest.fn(),
            // Agregar otros métodos necesarios aquí
        };
        posgradoService = new posgrado_services_1.PosgradoService();
        posgradoService.execRepository = mockRepository;
    });
    it('should find all posgrados', () => __awaiter(void 0, void 0, void 0, function* () {
        const posgrados = [new posgrado_entity_1.PosgradoEntity()];
        mockRepository.find.mockResolvedValue(posgrados);
        const result = yield posgradoService.findAllPosgrados();
        expect(result).toEqual(posgrados);
    }));
    it('should find a posgrado by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const posgrado = new posgrado_entity_1.PosgradoEntity();
        posgrado.id_posgrado = 1;
        mockRepository.findOneBy.mockResolvedValue(posgrado);
        const result = yield posgradoService.findPosgradoById(1);
        expect(result).toEqual(posgrado);
    }));
    it('should create a posgrado', () => __awaiter(void 0, void 0, void 0, function* () {
        // Crear un DTO válido
        const PosgradoDTO = {
            id_posgrado: 1,
            facultad: 'Facultad de Ejemplo',
            nombre: 'Nombre de Ejemplo',
            fecha_inicio: new Date(),
            fecha_culminacion: new Date(),
            matricula_inicial: 100,
            matricula_final: 200,
            categoria_cientifica: 'Categoría de Ejemplo',
            tipo_posgrado: 'Tipo de Ejemplo',
            id_profe: 1
        };
        // Crear una instancia de PosgradoEntity para la respuesta mock
        const posgradoEntity = new posgrado_entity_1.PosgradoEntity();
        posgradoEntity.id_posgrado = 1;
        posgradoEntity.facultad = 'Facultad de Ejemplo';
        posgradoEntity.nombre = 'Nombre de Ejemplo';
        posgradoEntity.fecha_inicio = new Date();
        posgradoEntity.fecha_culminacion = new Date();
        posgradoEntity.matricula_inicial = 100;
        posgradoEntity.matricula_final = 200;
        posgradoEntity.categoria_cientifica = 'Categoría de Ejemplo';
        posgradoEntity.tipo_posgrado = 'Tipo de Ejemplo';
        posgradoEntity.profesor = { id_profe: 1 };
        // Mockear la respuesta de save
        mockRepository.save.mockResolvedValue(posgradoEntity);
        // Ejecutar el método createPosgrado con DTO
        const result = yield posgradoService.createPosgrado(PosgradoDTO);
        // Verificar el resultado
        expect(result).toEqual(posgradoEntity);
    }));
    it('should update a posgrado', () => __awaiter(void 0, void 0, void 0, function* () {
        const updateResult = {
            generatedMaps: [],
            raw: {},
            affected: 1, // Asegúrate de que esto sea un número
        };
        mockRepository.update.mockResolvedValue(updateResult);
        const result = yield posgradoService.updatePosgrado(1, new posgrado_entity_1.PosgradoEntity());
        expect(result).toEqual(updateResult);
    }));
    it('should delete a posgrado', () => __awaiter(void 0, void 0, void 0, function* () {
        const deleteResult = {
            raw: {}, // Esto puede variar dependiendo de la base de datos y el ORM
            affected: 1, // Número de registros afectados
        };
        mockRepository.delete.mockResolvedValue(deleteResult);
        const result = yield posgradoService.deletePosgrado(1);
        expect(result).toEqual(deleteResult);
    }));
});
