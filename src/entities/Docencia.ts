import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Profesor } from "./Profesor"
import { Modulo } from "./Modulo"

@Entity()
export class Docencia{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    cursoAcademico:string
    @ManyToOne(()=>Profesor,(profesor=>profesor.docencias))
    profesor: Profesor
    @ManyToOne(()=>Modulo,(modulo=>modulo.docencias))
    modulo: Modulo

    
}