import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { EstudianteEntity } from "../../estudiante/entities/estudiante.entity";
import { ProfesorEntity } from "../../profesor/entities/profesor.entity";

@Entity({ name: "posgrado" })
export class PosgradoEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_posgrado!: number;

    @Column()
    facultad!: string;

    @Column()
    nombre!: string;

    @Column()
    fecha_inicio!: Date;

    @Column()
    fecha_culminacion!: Date;

    @Column()
    matricula_inicial!: number;

    @Column()
    matricula_final!: number;

    @Column()
    categoria_cientifica!: string;

    @Column()
    modalidad!: string;

    @OneToMany(() => EstudianteEntity, (estudiante) => estudiante.posgrado)
    estudiante!: EstudianteEntity["id_estudiante"];

    @ManyToOne(() => ProfesorEntity, (profesor) => profesor.posgrado)
    @JoinColumn({ name: 'id_profe' })
    profesor!: ProfesorEntity/*['id_profe']*/;
}
