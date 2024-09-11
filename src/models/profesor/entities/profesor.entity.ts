// src/profesor/entities/profesor.entity.ts
import { DoctoradoEntity } from './../../doctorado/entities/doctorado.entity';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";
import { PosgradoEntity } from "../../posgrado/entities/posgrado.entity";

@Entity({ name: "profesor" })
export class ProfesorEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_profe!: number;

    @Column()
    nombre_profe!: string;

    @Column()
    apellidos_profe!: string;

    @Column({ type: "bigint", unsigned: true, unique: true })
    ci_profe!: number;

    @Column({ type: "char", length: 1 })
    sexo_profe!: string;

    @Column()
    categoria_profe!: string;

    @OneToMany(() => PosgradoEntity, (posgrado) => posgrado.profesor)
    posgrado!: PosgradoEntity[];

    @OneToOne(() => DoctoradoEntity, (doctorado) => doctorado.profesor, { cascade: true })  // Relación opcional
    doctorado?: DoctoradoEntity;  // Nota el uso de '?' para indicar que es opcional
}
