import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, Relation } from "typeorm"

import { Order } from "./Order"

@Entity()
export class Student {

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


  @OneToMany(_type => Order, order => order.student)
  orders: Relation<Order[]>
}
