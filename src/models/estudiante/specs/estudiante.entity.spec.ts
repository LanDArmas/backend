import { EstudianteEntity } from '../../estudiante/entities/estudiante.entity';
import { PosgradoEntity } from '../../posgrado/entities/posgrado.entity';
import { DocenteEntity } from '../../docente/entities/docente.entity';
import { NoDocenteEntity } from '../../noDocente/entities/noDocente.entity';

describe('EstudianteEntity - Con todas las propiedades', () => {
  it('should create an EstudianteEntity with all properties and relations', () => {
    const posgrado = new PosgradoEntity();
    posgrado.id_posgrado = 1;

    const docente = new DocenteEntity();
    const noDocente = new NoDocenteEntity();

    const estudiante = new EstudianteEntity();
    estudiante.id_estudiante = 2;
    estudiante.ci = '09876543210';
    estudiante.nombre_est = 'María';
    estudiante.primer_apellido_est = 'González';
    estudiante.segundo_apellido_est = 'López';
    estudiante.sexo = 'F';
    estudiante.cuadro = true;
    estudiante.reserva = false;
    estudiante.posgrado = posgrado.id_posgrado;
    estudiante.docente = docente;
    estudiante.noDocente = noDocente;

    expect(estudiante.id_estudiante).toBe(2);
    expect(estudiante.ci).toBe('09876543210');
    expect(estudiante.nombre_est).toBe('María');
    expect(estudiante.primer_apellido_est).toBe('González');
    expect(estudiante.segundo_apellido_est).toBe('López');
    expect(estudiante.sexo).toBe('F');
    expect(estudiante.cuadro).toBe(true);
    expect(estudiante.reserva).toBe(false);
    expect(estudiante.posgrado).toBe(posgrado.id_posgrado);
    expect(estudiante.docente).toBe(docente);
    expect(estudiante.noDocente).toBe(noDocente);
  });
});
