import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Docencia } from "./Docencia"

@Entity()
export class Modulo {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    codigo: string
    @Column()
    nombre: string
    @OneToMany(()=>Docencia,(docencia=>docencia.modulo))
    docencias:Docencia[]
}