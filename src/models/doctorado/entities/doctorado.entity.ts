// src/doctorado/entities/doctorado.entity.ts
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { ProfesorEntity } from "../../profesor/entities/profesor.entity";

@Entity({ name: "doctorado" })
export class DoctoradoEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_doctorado!: number;

    @Column()
    nombre_programa!: string;

    @Column()
    modalidad_doc!: string;

    @Column()
    edad_doctor!: number;

    @Column()
    territorio!: boolean;
    
    @Column()
    area_ciencia!: string;

    @OneToOne(() => ProfesorEntity, (profesor) => profesor.doctorado, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'id_profe' })  // Asegurarse de que está correctamente relacionado
    profesor!: ProfesorEntity;
}
