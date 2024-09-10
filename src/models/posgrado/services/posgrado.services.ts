import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { PosgradoDTO } from "../dto/posgrado.dto";
import { PosgradoEntity } from "../entities/posgrado.entity";
import { ProfesorEntity } from "../../profesor/entities/profesor.entity";

export class PosgradoService extends BaseService<PosgradoEntity> {
     constructor() {
        super(PosgradoEntity);
     }

     async findPosgradoWithActividades(id_posgrado: number): Promise<PosgradoEntity | null> {
        return (await this.execRepository).findOne({
          where: { id_posgrado },
          relations: ['actividad'],
          select: ['nombre', 'actividad']
        });
      }

    async findAllPosgrados(): Promise<PosgradoEntity[]> {
        return (await this.execRepository)
        .find({
            relations:['profesor'],
            select: [ 'profesor']
        });
    }

    async findPosgradoById(id_posgrado: number): Promise<PosgradoEntity | null> {
        return (await this.execRepository).findOneBy({ id_posgrado });
    }

    async findCountByPosgrado(): Promise<any> {
        const query = `
            SELECT
                posgrado.id_posgrado AS id_posgrado,
                posgrado.nombre AS nombre,
                posgrado.matricula_inicial AS matricula_inicial,
                posgrado.matricula_final AS matricula_final,
                COUNT(CASE WHEN estudiante.sexo = 'F' THEN 1 ELSE NULL END) AS mujeres,
                COUNT(CASE WHEN estudiante.cuadro = true THEN 1 ELSE NULL END) AS cuadros,
                COUNT(CASE WHEN estudiante.reserva = true THEN 1 ELSE NULL END) AS reservas
            FROM
                posgrado
            LEFT JOIN
                estudiante ON estudiante.id_posgrado = posgrado.id_posgrado
            GROUP BY
                posgrado.id_posgrado, posgrado.nombre, posgrado.matricula_inicial, posgrado.matricula_final;
        `;
        console.log(query)

        try {
            const results = await (await this.execRepository).query(query);
            return results;
        } catch (error) {
            console.error('Error executing query:', error);
            throw new Error('Error executing query');
        }
    }

    
    
    
    

   

    async createPosgrado(body: PosgradoDTO): Promise<PosgradoEntity> {
           return (await this.execRepository).save(body);
    }

    async updatePosgrado(id_posgrado: number, infoUpdate: PosgradoDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id_posgrado, infoUpdate);
    }

    async deletePosgrado(id_posgrado: number): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id_posgrado });
    }
}
