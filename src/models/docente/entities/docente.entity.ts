import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { EstudianteEntity } from "../../estudiante/entities/estudiante.entity";

@Entity({ name: "docente" })
export class DocenteEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_docente!: number;

    @Column()
    facultad_doc!: string;

    @OneToOne(() => EstudianteEntity, (estudiante) => estudiante.docente, { onDelete: 'CASCADE'})
    @JoinColumn({ name: 'id_estudiante' })
    estudiante!: EstudianteEntity;
}
