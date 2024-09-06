import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { NoDocenteDTO } from "../dto/noDocente.dto";
import { NoDocenteEntity } from "../entities/noDocente.entity";

export class NoDocenteService extends BaseService<NoDocenteEntity> {
    constructor() {
        super(NoDocenteEntity);
    }

    // Servicio para obtener todos los no docentes
    async findAllNoDocentes(): Promise<NoDocenteEntity[]> {
        return (await this.execRepository)
        .find({ 
            relations: ["estudiante"],
            select: ["estudiante"]
        });
    }

    // Servicio para obtener un no docente por ID
    async findNoDocenteById(id_no_docente: number): Promise<NoDocenteEntity | null> {
        return (await this.execRepository).findOneBy({ id_no_docente });
    }

    // Servicio para crear un no docente
    async createNoDocente(body: NoDocenteDTO): Promise<NoDocenteEntity> {
        const noDocente = NoDocenteEntity.create(body);
        return await noDocente.save();
    }

    // Servicio para eliminar un no docente
    async deleteNoDocente(id_no_docente: number): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id_no_docente });
    }

    // Servicio para actualizar un no docente
    async updateNoDocente(id_no_docente: number, infoUpdate: NoDocenteDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id_no_docente, infoUpdate);
    }
}
