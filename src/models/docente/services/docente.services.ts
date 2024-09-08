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
        const docente = DocenteEntity.create(body);
        return await docente.save();
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
