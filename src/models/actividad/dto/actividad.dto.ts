import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { BaseDTO } from './../../../config/base.dto';
import { PosgradoEntity } from '../../posgrado/entities/posgrado.entity';
export class ActividadDTO extends BaseDTO{

    @IsNotEmpty()
    @IsNumber()
    id_actividad!: number;

    @IsNotEmpty()
    @IsString()
    descripcion!: string;

    @IsNotEmpty()
    @IsDate()
    fecha_act!: Date;

    @IsNotEmpty()
    @IsNumber()
    id_posgrado!: number;

}