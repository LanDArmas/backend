import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { PosgradoDTO } from "../dto/posgrado.dto";
import { PosgradoEntity } from "../entities/posgrado.entity";
import { ProfesorEntity } from "../../profesor/entities/profesor.entity";

export class PosgradoService extends BaseService<PosgradoEntity> {
     constructor() {
        super(PosgradoEntity);
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
   

    async createPosgrado(body: PosgradoDTO): Promise<PosgradoEntity> {
        // const posgrado = new PosgradoEntity();
        // posgrado.facultad = body.facultad;
        // posgrado.nombre = body.nombre;
        // posgrado.fecha_inicio = body.fecha_inicio;  // Asegúrate de convertir la fecha si es un string
        // posgrado.fecha_culminacion = body.fecha_culminacion;
        // posgrado.matricula_inicial = body.matricula_inicial;
        // posgrado.matricula_final = body.matricula_final;
        // posgrado.categoria_cientifica = body.categoria_cientifica;
        // posgrado.tipo_posgrado = body.tipo_posgrado;
        // posgrado.profesor = body.id_profe;
        return (await this.execRepository).save(body);
    }

    async updatePosgrado(id_posgrado: number, infoUpdate: PosgradoDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id_posgrado, infoUpdate);
    }

    async deletePosgrado(id_posgrado: number): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id_posgrado });
    }
}
