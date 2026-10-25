import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario"
import { Docencia } from "./Docencia";

@Entity()
export class Profesor extends Usuario{
    @PrimaryGeneratedColumn()
    id:number=0;
    @Column()
    dni:string=''
    @Column()
    fechaIncorporacion:Date=new Date()
    @OneToMany(()=>Docencia,(docencia=>docencia.profesor))
    docencias:Docencia[]
}