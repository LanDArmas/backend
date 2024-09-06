import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { ProfesorDTO } from "../dto/profesor.dto";
import { ProfesorEntity } from "../entities/profesor.entity";

export class ProfesorService extends BaseService<ProfesorEntity> {
    constructor() {
        super(ProfesorEntity);
    }

    // Servicio para obtener todos los Profesores
    async findAllProfesors(): Promise<ProfesorEntity[]> {
        return (await this.execRepository)
        .find({
            relations:['doctorado'],
            select:['doctorado']
        });
    }

    // Servicio para obtener un Profesor según id
    async findProfesorById(id_profe: number): Promise<ProfesorEntity | null> {
        return (await this.execRepository).findOneBy({ id_profe });
    }

    // Servicio para crear un Profesor
    async createProfesor(body: ProfesorDTO): Promise<ProfesorEntity> {
        return (await this.execRepository).save(body);
    }

    // Eliminar un Profesor
    async deleteProfesor(id_profe: number): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id_profe });
    }

    // Actualizar un Profesor
    async updateProfesor(id_profe: number, infoUpdate: ProfesorDTO): Promise<UpdateResult> {
        try {
            return await (await this.execRepository).update(id_profe, infoUpdate);
        } catch (error) {
            if (error instanceof Error && error.name === 'QueryFailedError' && (error as any).code === '23505') {
                // Manejar error de duplicado para PostgreSQL (código de error 23505)
                throw new Error("El CI del profesor ya existe.");
            } else {
                throw error;
            }
        }
    }
}
