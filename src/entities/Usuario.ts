import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('name:')
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column('')
    dni:string
    @Column()
    nombre:string
    @Column()
    apellidos:string
    @Column()
    correoElectronico:string
    @Column()
    telefono:string
    
}
