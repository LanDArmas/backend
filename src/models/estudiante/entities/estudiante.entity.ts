  import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn,} from "typeorm";
  import { DocenteEntity } from "../../docente/entities/docente.entity";
  import { NoDocenteEntity } from "../../noDocente/entities/noDocente.entity";
  import { PosgradoEntity } from "../../posgrado/entities/posgrado.entity";
  
  @Entity({ name: "estudiante" })
  export class EstudianteEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_estudiante!: number;
  
    @Column({ type: "bigint", unsigned: true, unique: true, })
    ci!: string;

    @Column()
    nombre_est!: string;
  
    @Column()
    primer_apellido_est!: string;
  
    @Column()
    segundo_apellido_est!: string;
  
    @Column({ type: "char", length: 1 })
    sexo!: string;
  
    @Column()
    cuadro!: boolean;
  
    @Column()
    reserva!: boolean;
  
    @OneToOne(()=> DocenteEntity, (docente)=> docente.estudiante,{cascade: true,})
    docente!: DocenteEntity;

    @OneToOne(()=> NoDocenteEntity, (noDocente)=> noDocente.estudiante,{cascade: true,})
    noDocente!: NoDocenteEntity;
  
    @ManyToOne(() => PosgradoEntity, (posgrado) => posgrado.estudiante,{nullable:false})
    @JoinColumn({ name: 'id_posgrado' })
    posgrado!: PosgradoEntity['id_posgrado'];
  }
  