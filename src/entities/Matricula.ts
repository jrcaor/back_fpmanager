import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Matricula{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    cursoEscolar:string 
}