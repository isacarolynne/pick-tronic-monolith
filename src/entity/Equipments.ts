import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, Relation } from "typeorm"

import { Order } from "./Order"

@Entity()
export class Equipment {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @CreateDateColumn()
  createdAt: Date

  @Column({ unique: true })
  serialNumber: string

  @Column()
  name: string

  @Column()
  status: string // DISPONÍVEL (available) | INDISPONÍVEL (unavailable)


  @OneToMany(_type => Order, order => order.equipment)
  orders: Relation<Order[]>
}
