import { IsNotEmpty, IsString, IsNumber, IsDate, IsBoolean, IsInt, ValidateNested } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";
import { Type } from "class-transformer";

export class PosgradoDTO  {
    @IsNotEmpty()
    id_posgrado!: number;
    
    @IsNotEmpty()
    @IsString()
    facultad!: string;

    @IsNotEmpty()
    @IsString()
    nombre!: string;

    @IsNotEmpty()
    @IsDate()
    fecha_inicio!: Date;

    @IsNotEmpty()
    @IsDate()
    fecha_culminacion!: Date;

    @IsNotEmpty()
    @IsNumber()
    matricula_inicial!: number;

    @IsNotEmpty()
    @IsNumber()
    matricula_final!: number;

    @IsNotEmpty()
    @IsString()
    categoria_cientifica!: string;

    @IsNotEmpty()
    @IsString()
    modalidad!: string;

    @IsNotEmpty()
    @IsNumber()
    id_profe!: number;  // ID del profesor asociado


}
