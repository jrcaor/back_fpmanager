import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { EstadoMatricula } from "./EstadoMatricula"

@Entity()
export class LineaMatricula{
    /*Si nota== -1 reuncia convocatoria*/
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    notaOrdinaria:number
    @Column()
    notaExtraordinaria:number
    @Column()
    notaFinal:number
    @Column()
    estado:EstadoMatricula
}