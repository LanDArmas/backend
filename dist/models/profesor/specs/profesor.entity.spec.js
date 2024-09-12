"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profesor_entity_1 = require("../../profesor/entities/profesor.entity");
const doctorado_entity_1 = require("../../doctorado/entities/doctorado.entity");
describe('ProfesorEntity - Con todas las propiedades', () => {
    it('should create a ProfesorEntity with all properties and relations', () => {
        const doctorado = new doctorado_entity_1.DoctoradoEntity();
        doctorado.id_doctorado = 1;
        doctorado.nombre_programa = 'Doctorado en Ciencias';
        const profesor = new profesor_entity_1.ProfesorEntity();
        profesor.id_profe = 2;
        profesor.nombre_profe = 'María';
        profesor.apellidos_profe = 'González';
        profesor.ci_profe = 123456789;
        profesor.sexo_profe = 'F';
        profesor.categoria_profe = 'Titular';
        profesor.doctorado = doctorado;
        expect(profesor.id_profe).toBe(2);
        expect(profesor.nombre_profe).toBe('María');
        expect(profesor.apellidos_profe).toBe('González');
        expect(profesor.ci_profe).toBe(123456789);
        expect(profesor.sexo_profe).toBe('F');
        expect(profesor.categoria_profe).toBe('Titular');
        expect(profesor.doctorado).toBe(doctorado);
    });
});
