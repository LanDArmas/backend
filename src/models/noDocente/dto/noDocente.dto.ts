import { IsNotEmpty, IsString } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";
import { EstudianteEntity } from "../../estudiante/entities/estudiante.entity";

export class NoDocenteDTO extends BaseDTO {
    @IsNotEmpty()
    @IsString()
    organismo!: string;

    @IsNotEmpty()
    estudiante!: EstudianteEntity; // ID del estudiante relacionado
}
