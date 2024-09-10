import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { ActividadDTO } from "../dto/actividad.dto";
import { ActividadEntity } from "../entities/actividad.entity";

export class ActividadService extends BaseService<ActividadEntity> {
    constructor(){
        super(ActividadEntity);
    }
	// servicio para obtener todos los actividads
    async findAllActividades():Promise<ActividadEntity[]> {
        return (await this.execRepository)
        .find({
            relations: ['posgrado'], 
            select: ['posgrado']});
    }
 // servicio para obtener un actividads según id
 async findActividadById(id_actividad: number): Promise<ActividadEntity | null>     {
    return (await this.execRepository).findOneBy({ id_actividad });   
}
// servicio para crear un actividad
async createActividad(body: ActividadDTO): Promise<ActividadEntity>{
    return (await this.execRepository).save(body);
}
 // eliminar un actividad
 async deleteActividad(id_actividad: number): Promise<DeleteResult>{
    return (await this.execRepository).delete({id_actividad});
 }
// actualizar un actividad
 async updateActividad(id_actividad:number, infoUpdate: ActividadDTO): Promise<UpdateResult>{
    return (await this.execRepository).update(id_actividad, infoUpdate);
 }
}
