import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { EstudianteDTO } from "../dto/estudiante.dto";
import { EstudianteEntity } from "../entities/estudiante.entity";
import { DocenteEntity } from "../../docente/entities/docente.entity";
import { NoDocenteEntity } from "../../noDocente/entities/noDocente.entity";
import { PosgradoEntity } from "../../posgrado/entities/posgrado.entity";

export class EstudianteService extends BaseService<EstudianteEntity> {
  constructor() {
    super(EstudianteEntity);
  }

  async findAllEstudiantes(): Promise<EstudianteEntity[]> {
    return (await this.execRepository)
    .find({
      relations: ['posgrado', 'docente', 'noDocente'], 
      select: ['posgrado','docente','noDocente']});

  }

  async findEstudianteById(id_estudiante: number): Promise<EstudianteEntity | null> {
    return (await this.execRepository).findOneBy({id_estudiante});
  }
  
  async findEstudiantesByPosgradoId(id_posgrado: number): Promise<EstudianteEntity[]> {
    return (await this.execRepository)
      .createQueryBuilder('estudiante')
      .innerJoinAndSelect('estudiante.posgrado', 'posgrado')
      .where('posgrado.id_posgrado = :id_posgrado', { id_posgrado })
      .getMany();
  }

  async findCountByPosgrado(): Promise<any> {
    const query = (await this.execRepository).createQueryBuilder('estudiante')
      .select('estudiante.posgrado.id_posgrado AS id_posgrado')
      .addSelect('COUNT(CASE WHEN estudiante.docente IS NOT NULL THEN 1 ELSE NULL END) AS docentes')
      .addSelect('COUNT(CASE WHEN estudiante.noDocente IS NOT NULL THEN 1 ELSE NULL END) AS noDocentes')
      .addSelect('COUNT(CASE WHEN estudiante.sexo = \'F\' THEN 1 ELSE NULL END) AS mujeres')
      .addSelect('COUNT(CASE WHEN estudiante.cuadro = true THEN 1 ELSE NULL END) AS cuadros')
      .addSelect('COUNT(CASE WHEN estudiante.reserva = true THEN 1 ELSE NULL END) AS reservas')
      .groupBy('estudiante.posgrado.id_posgrado');
  
    const results = await query.getRawMany();
  
    return results;
  }
  


  

  
  async createEstudiante(body: EstudianteDTO): Promise<EstudianteEntity> {

    //console.log(body)
    // const estudiante = new EstudianteEntity();
    
    // estudiante.id_estudiante = body.id_estudiante;
    // estudiante.ci = body.ci;
    // estudiante.nombre_est = body.nombre_est;
    // estudiante.primer_apellido_est = body.primer_apellido_est;
    // estudiante.segundo_apellido_est = body.segundo_apellido_est;
    // estudiante.sexo = body.sexo;
    // estudiante.cuadro = body.cuadro;
    // estudiante.reserva = body.reserva;
    // estudiante.posgrado = body.id_posgrado;
    // //estudiante.docente = body.docente;

    // const docente = new DocenteEntity();
    // docente.facultad_doc = body.docente.facultad_doc;


    return (await this.execRepository).save(body);
  }

  async deleteEstudiante(id_estudiante: number): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id_estudiante });
  }

  async updateEstudiante(id_estudiante: number, infoUpdate: EstudianteDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id_estudiante, infoUpdate);
}
// async findStudentsByCourse(id_posgrado: number): Promise<EstudianteEntity[]> {
//   return (await this.execRepository)
//     .createQueryBuilder('estudiante')
//     .innerJoin('estudiante.posgrado', 'posgrado')
//     .where('posgrado.id_posgrado = :id_posgrado', { id_posgrado })
//     .getMany();
// }
}