import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Employee {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @CreateDateColumn()
  createdAt: Date

  @Column({ unique: true })
  registration: string // Matrícula

  @Column()
  firstName: string

  @Column()
  lastName: string

}
