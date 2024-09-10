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

async countDoctorados(): Promise<any[]> {
    return (await this.execRepository)
      .createQueryBuilder('doctorado')
      .select('COUNT(CASE WHEN doctorado.edad_doctor < 45 THEN 1 ELSE NULL END)', 'doctores_menos_45')
      .addSelect('AVG(doctorado.edad_doctor)', 'promedio_edad')
      .addSelect('COUNT(CASE WHEN doctorado.modalidad_doc = \'Tiempo Parcial\' THEN 1 ELSE NULL END)', 'doctores_tiempo_parcial')
      .addSelect('COUNT(CASE WHEN doctorado.modalidad_doc = \'Tiempo Completo\' THEN 1 ELSE NULL END)', 'doctores_tiempo_completo')
      .addSelect('COUNT(CASE WHEN doctorado.area_ciencia = \'Ciencias Técnicas\' THEN 1 ELSE NULL END)', 'doctores_ciencias_tecnicas')
      .addSelect('COUNT(CASE WHEN doctorado.area_ciencia = \'Ciencias Pedagógicas\' THEN 1 ELSE NULL END)', 'doctores_ciencias_pedagogicas')
      .addSelect('COUNT(CASE WHEN doctorado.area_ciencia = \'Ciencias Matemáticas\' THEN 1 ELSE NULL END)', 'doctores_ciencias_matematicas')
      .addSelect('COUNT(CASE WHEN doctorado.area_ciencia = \'Ciencias de la Educación\' THEN 1 ELSE NULL END)', 'doctores_ciencias_de_la_educacion')
      .addSelect('COUNT(CASE WHEN doctorado.area_ciencia = \'Ciencias Económicas\' THEN 1 ELSE NULL END)', 'doctores_ciencias_economicas')
      .getRawMany();
  }

}