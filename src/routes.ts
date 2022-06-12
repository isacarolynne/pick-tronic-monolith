import { EmployeeController } from "./controller/EmployeeController"
import { EquipmentController } from "./controller/EquipmentController"
import { OrderController } from "./controller/OrderController"
import { StudentController } from "./controller/StudentController"
import { UserController } from "./controller/UserController"

export const Routes = [
  // Users
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
  }, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
  }, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
  }, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
  },

  // Students
  {
    method: "get",
    route: "/students",
    controller: StudentController,
    action: "all"
  },
  {
    method: "post",
    route: "/students",
    controller: StudentController,
    action: "save"
  },

  // Employees
  {
    method: "get",
    route: "/employees",
    controller: EmployeeController,
    action: "all"
  },
  {
    method: "post",
    route: "/employees",
    controller: EmployeeController,
    action: "save"
  },

  // Equipments
  {
    method: "get",
    route: "/equipments",
    controller: EquipmentController,
    action: "all"
  },
  {
    method: "post",
    route: "/equipments",
    controller: EquipmentController,
    action: "save"
  },

  // Orders
  {
    method: "get",
    route: "/orders",
    controller: OrderController,
    action: "all"
  },
  {
    method: "post",
    route: "/orders",
    controller: OrderController,
    action: "save"
  },
  // {
  //   method: "patch",
  //   route: "/orders/:id?action",
  //   controller: OrderController,
  //   action: "update"
  // },
]
