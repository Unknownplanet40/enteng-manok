import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('AsisTable') // Table name
export class Lorenzo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullname: string

    @Column()
    age: number

    @CreateDateColumn()
    dateCreated: Date
}