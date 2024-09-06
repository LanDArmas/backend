import { ProfesorEntity } from '../src/models/profesor/entities/profesor.entity';
import { PosgradoEntity } from './../src/models/posgrado/entities/posgrado.entity';
// posgrado.entity.test.ts


describe('PosgradoEntity', () => {
  it('should create a PosgradoEntity with correct properties', () => {
    const profesor = new ProfesorEntity();
    profesor.id_profe = 1; // Suponiendo que ya tienes un profesor creado para la prueba

    const posgrado = new PosgradoEntity();
    posgrado.id_posgrado = 1;
    posgrado.facultad = 'Facultad de Ciencias';
    posgrado.nombre = 'Master en Computación';
    posgrado.fecha_inicio = new Date('2024-01-01');
    posgrado.fecha_culminacion = new Date('2025-01-01');
    posgrado.matricula_inicial = 30;
    posgrado.matricula_final = 28;
    posgrado.categoria_cientifica = 'Maestría';
    posgrado.tipo_posgrado = 'Otra';
    posgrado.profesor = profesor;

    expect(posgrado.id_posgrado).toBe(1);
    expect(posgrado.facultad).toBe('Facultad de Ciencias');
    expect(posgrado.nombre).toBe('Master en Computación');
    expect(posgrado.fecha_inicio).toEqual(new Date('2024-01-01'));
    expect(posgrado.fecha_culminacion).toEqual(new Date('2025-01-01'));
    expect(posgrado.matricula_inicial).toBe(30);
    expect(posgrado.matricula_final).toBe(28);
    expect(posgrado.categoria_cientifica).toBe('Maestría');
    expect(posgrado.tipo_posgrado).toBe('Otra');
    expect(posgrado.profesor).toEqual(profesor);
  });
});
