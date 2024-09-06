import { IsNotEmpty, IsString, IsBoolean, IsOptional, ValidateNested, IsNumber, Length } from "class-validator";
import { Type } from "class-transformer";
import { BaseDTO } from "../../../config/base.dto";
import { DocenteDTO } from "../../docente/dto/docente.dto";
import { NoDocenteDTO } from "../../noDocente/dto/noDocente.dto";
import { DocenteEntity } from "../../docente/entities/docente.entity";
import { NoDocenteEntity } from "../../noDocente/entities/noDocente.entity";

export class EstudianteDTO extends BaseDTO {
    @IsNotEmpty()
    @IsNumber()
    id_estudiante!: number;
    
    @IsNotEmpty()
    @IsNumber()
    @Length(11, 11)
    ci!: string;

    @IsNotEmpty()
    @IsString()
    nombre_est!: string;

    @IsNotEmpty()
    @IsString()
    primer_apellido_est!: string;

    @IsNotEmpty()
    @IsString()
    segundo_apellido_est!: string;

    @IsNotEmpty()
    @IsString()
    sexo!: string;

    @IsNotEmpty()
    @IsBoolean()
    cuadro!: boolean;

    @IsNotEmpty()
    @IsBoolean()
    reserva!: boolean;

    @IsNotEmpty()
    @IsNumber()
    id_posgrado!: number;

    @IsNotEmpty()
    docente!: DocenteEntity;

    @IsNotEmpty()
    noDocente!: NoDocenteEntity;


   
}
