import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { EstudianteEntity } from "../../estudiante/entities/estudiante.entity";

@Entity({ name: "no_docente" })
export class NoDocenteEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_no_docente!: number;

    @Column()
    organismo!: string;

    @OneToOne(() => EstudianteEntity, (estudiante) => estudiante.noDocente, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({ name: 'id_estudiante' })
    estudiante!: EstudianteEntity;
}
