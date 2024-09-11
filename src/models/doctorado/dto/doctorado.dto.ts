// src/doctorado/dto/doctorado.dto.ts
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";
import { ProfesorEntity } from "../../profesor/entities/profesor.entity";

export class DoctoradoDTO extends BaseDTO {
    // @IsNotEmpty()
    // @IsNumber()
    // id_doctorado!: number;

    @IsNotEmpty()
    @IsString()
    nombre_programa!: string;

    @IsNotEmpty()
    @IsString()
    modalidad_doc!: string;

    @IsNotEmpty()
    @IsNumber()
    edad_doctor!: number;

    @IsNotEmpty()
    @IsBoolean()
    territorio!: boolean;
    
    @IsNotEmpty()
    @IsString()
    area_ciencia!: string;

    @IsOptional()
    profesor?: ProfesorEntity;  // Hacer que sea opcional
}
