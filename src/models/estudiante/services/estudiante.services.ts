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
    const query = (await this.execRepository)
      .createQueryBuilder('estudiante')
      .innerJoin('estudiante.posgrado', 'posgrado')  // Hacemos un join con la tabla de posgrado
      .select('posgrado.nombre AS nombre')  // Nombre del posgrado
      .addSelect('posgrado.matricula_inicial AS matricula_inicial')  // Matrícula inicial del posgrado
      .addSelect('posgrado.matricula_final AS matricula_final')  // Matrícula final del posgrado
      .addSelect('COUNT(CASE WHEN estudiante.sexo = \'F\' THEN 1 ELSE NULL END) AS mujeres')  // Cantidad de mujeres
      .addSelect('COUNT(CASE WHEN estudiante.cuadro = true THEN 1 ELSE NULL END) AS cuadros')  // Cantidad de cuadros
      .addSelect('COUNT(CASE WHEN estudiante.reserva = true THEN 1 ELSE NULL END) AS reservas')  // Cantidad de reservas
      .groupBy('posgrado.nombre, posgrado.matricula_inicial, posgrado.matricula_final');  // Agrupamos por los campos de posgrado
  
    const results = await query.getRawMany();
  
    return results;
  } 
      
  async createEstudiante(body: EstudianteDTO): Promise<EstudianteEntity> {
    return (await this.execRepository).save(body);
  }

  async deleteEstudiante(id_estudiante: number): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id_estudiante });
  }

  async updateEstudiante(id_estudiante: number, infoUpdate: EstudianteDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id_estudiante, infoUpdate);
  }

  async countEstudiantesByTipo(): Promise<any[]> {
    return (await this.execRepository)
      .createQueryBuilder('estudiante')
      .select('COUNT(CASE WHEN estudiante.docente IS NOT NULL THEN 1 ELSE NULL END)', 'estudiantes_docentes')
      .addSelect('COUNT(CASE WHEN estudiante.noDocente IS NOT NULL THEN 1 ELSE NULL END)', 'estudiantes_no_docentes')
      .leftJoinAndSelect('estudiante.docente', 'docente')
      .leftJoinAndSelect('estudiante.noDocente', 'noDocente')
      .getRawMany();
  }



}