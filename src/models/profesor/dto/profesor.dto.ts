import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class ProfesorDTO extends BaseDTO {
    @IsNotEmpty()
    @IsNumber()
    id_profe!: number;
	
    @IsNotEmpty()
    @IsString()
    nombre_profe!: string;

    @IsNotEmpty()
    @IsString()
    apellidos_profe!: string;

    @IsNotEmpty()
    @IsNumber()
    @Length(11,11)
    ci_profe!: number;

    @IsNotEmpty()
    @IsString()
    sexo_profe!: string;

    @IsNotEmpty()
    @IsString()
    formacion!: string;

    
    
}
