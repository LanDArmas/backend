import { IsNotEmpty, IsString } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class NoDocenteDTO extends BaseDTO {
    @IsNotEmpty()
    @IsString()
    organismo!: string;

    @IsNotEmpty()
    id_estudiante!: number; // ID del estudiante relacionado
}
