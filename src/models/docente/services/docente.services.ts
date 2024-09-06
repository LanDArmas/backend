import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { DocenteDTO } from "../dto/docente.dto";
import { DocenteEntity } from "../entities/docente.entity";
import { EstudianteEntity } from "../../estudiante/entities/estudiante.entity";
import { PosgradoEntity } from "../../posgrado/entities/posgrado.entity";


export class DocenteService extends BaseService<DocenteEntity> {
    constructor() {
        super(DocenteEntity);
    }

    // Servicio para obtener todos los docentes
    async findAllDocentes(): Promise<DocenteEntity[]> {
        return (await this.execRepository)
        .find({ 
            relations: ["estudiante"],
            select: ['estudiante']
         });
    }

    // Servicio para obtener un docente por ID
    async findDocenteById(id_docente: number): Promise<DocenteEntity | null> {
        return (await this.execRepository).findOneBy({id_docente});
    }

    // Servicio para crear un docente
    async createDocente(body: DocenteDTO): Promise<DocenteEntity> {
        const repository = await this.execRepository;

        // Buscar el posgrado por ID para asegurarse de que existe
        const posgrado = await repository.manager.findOne(PosgradoEntity, {
            where: { id_posgrado: body.estudiante.posgrado },
        });

        if (!posgrado) {
            throw new Error(`No se encontró el posgrado con ID ${body.estudiante.posgrado}`);
        }

        // Crear una nueva instancia de EstudianteEntity
        const estudiante = new EstudianteEntity();
        estudiante.ci = body.estudiante.ci;
        estudiante.nombre_est = body.estudiante.nombre_est;
        estudiante.primer_apellido_est = body.estudiante.primer_apellido_est;
        estudiante.segundo_apellido_est = body.estudiante.segundo_apellido_est;
        estudiante.sexo = body.estudiante.sexo;
        estudiante.cuadro = body.estudiante.cuadro;
        estudiante.reserva = body.estudiante.reserva;
        estudiante.posgrado = body.estudiante.posgrado; // Asignar el posgrado al estudiante

        // Guardar el estudiante primero para obtener su ID
        const savedEstudiante = await repository.manager.save(estudiante);

        // Crear una nueva instancia de DocenteEntity
        const docente = new DocenteEntity();
        docente.facultad_doc = body.facultad_doc;
        docente.estudiante = savedEstudiante; // Asignar el estudiante ya guardado al docente

        // Guardar el docente (esto debería asociar el estudiante ya guardado)
        return repository.save(docente);
    }
    

    // Servicio para eliminar un docente
    async deleteDocente(id_docente: number): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id_docente });
    }

    // Servicio para actualizar un docente
    async updateDocente(id_docente: number, infoUpdate: DocenteDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id_docente, infoUpdate);
    }
}
