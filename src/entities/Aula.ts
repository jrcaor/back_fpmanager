import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { TipoAula } from "./TipoAula"
import { Modulo } from "./Modulo"

@Entity()
export class Aulas{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    numeroAula:number
    @Column()
    capacidad:number
    @Column()
    tipo:TipoAula
    @ManyToMany(()=>Modulo)
    @JoinTable()
    modulos:Modulo[]
}