import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class CicloFormativo{
    @PrimaryGeneratedColumn()
    id:number=0
    @Column()
    codigo:number=0
    @Column()
    nombre:string=''
    @Column()
    familiProfesional:string=''

}
