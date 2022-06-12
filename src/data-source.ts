import "reflect-metadata"
import { DataSource } from "typeorm"

import { Employee } from "./entity/Employee"
import { Equipment } from "./entity/Equipments"
import { Order } from "./entity/Order"
import { Student } from "./entity/Student"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true, // Should not be used on Production
  logging: false,
  entities: [Employee, Equipment, Order, Student, User],
  migrations: [],
  subscribers: [],
})
