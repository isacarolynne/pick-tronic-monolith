import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm"

import { Equipment } from "./Equipments"
import { Student } from "./Student"

@Entity()
export class Order {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @CreateDateColumn()
  createdAt: Date

  @Column()
  deliveredAt: Date

  @Column()
  status: string // LOCADO (located) | DEVOLVIDO (delivered)


  @ManyToOne(_type => Student, student => student.orders)
  student: Relation<Student>

  @ManyToOne(_type => Equipment, equipment => equipment.orders)
  equipment: Relation<Equipment>
}
