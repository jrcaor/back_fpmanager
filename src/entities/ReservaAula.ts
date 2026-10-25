import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ReservaAula{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    fechaReserva:Date
    @Column()
    horaInicio:string
    @Column()
    horaFin:string
}