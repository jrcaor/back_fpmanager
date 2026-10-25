import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Usuario } from "./Usuario";

@Entity()
export class Alumno extends Usuario{ 
    @PrimaryGeneratedColumn()
    id: number=0;
    @Column()
    numExpediente:string='';
    @Column()
    fechaNacimiento:Date=new Date();
}