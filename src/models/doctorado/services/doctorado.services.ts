import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { DoctoradoDTO } from "../dto/doctorado.dto";
import { DoctoradoEntity } from "../entities/doctorado.entity";

export class DoctoradoService extends BaseService<DoctoradoEntity> {
    constructor(){
        super(DoctoradoEntity);
    }
	// servicio para obtener todos los Doctorados
    async findAllDoctorados():Promise<DoctoradoEntity[]> {
        return (await this.execRepository)
        .find({
            relations: ['profesor'],
            select: ['profesor']
        });
    }
    // servicio para obtener un Doctorados según id
    async findDoctoradoById(id_doctorado: number): Promise<DoctoradoEntity | null>     {
        return (await this.execRepository).findOneBy({ id_doctorado });   
    }
    // servicio para crear un Doctorado
 async createDoctorado(body: DoctoradoDTO): Promise<DoctoradoEntity>{
        return (await this.execRepository).save(body);
    }
// eliminar un Doctorado
async deleteDoctorado(id_doctorado: number): Promise<DeleteResult>{
    return (await this.execRepository).delete({id_doctorado});
}
// actualizar un Doctorado
async updateDoctorado(id_doctorado: number, infoUpdate: DoctoradoDTO): Promise<UpdateResult>{
return (await this.execRepository).update(id_doctorado, infoUpdate);
}
}