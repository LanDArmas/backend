import { PosgradoEntity } from './../../posgrado/entities/posgrado.entity';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";


@Entity({ name: "actividad" })
export class ActividadEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_actividad!: number;

    @Column()
    descripcion!: string;

    @Column()
    fecha_act!: Date;

    @ManyToOne(() => PosgradoEntity, (posgrado) => posgrado.actividad, { onDelete: 'CASCADE'})
    @JoinColumn({ name: 'id_posgrado' })
    posgrado!: PosgradoEntity['id_posgrado'];
}
