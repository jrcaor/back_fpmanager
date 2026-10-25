import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecursosTecnologicos{
    @PrimaryGeneratedColumn()
    id: number
}