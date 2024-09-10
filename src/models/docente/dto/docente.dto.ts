import { IsNotEmpty, IsString } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";
import { EstudianteEntity } from "../../estudiante/entities/estudiante.entity";

export class DocenteDTO extends BaseDTO {
    @IsNotEmpty()
    @IsString()
    facultad_doc!: string;

    @IsNotEmpty()
    estudiante!: EstudianteEntity; // ID del estudiante relacionado


}
