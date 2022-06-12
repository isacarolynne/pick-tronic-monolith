import { NextFunction, Request, Response } from "express"

import { AppDataSource } from "../data-source"
import { Equipment } from "../entity/Equipments"
import { Order } from "../entity/Order"
import { Student } from "../entity/Student"
import { getCurrentDate, getDeliveryDate } from "../utils/date-time"


export class OrderController {

  private orderRepository = AppDataSource.getRepository(Order)
  private studentRepository = AppDataSource.getRepository(Student)
  private equipmentRepository = AppDataSource.getRepository(Equipment)

  async all(_request: Request, _response: Response, _next: NextFunction) {
    return this.orderRepository.find({
      relations: {
        student: true,
        equipment: true
      }
    })
  }

  // async one(request: Request, response: Response, next: NextFunction) {
  //   return this.orderRepository.findOneBy({ id: request.params.id })
  // }

  async save(request: Request, _response: Response, _next: NextFunction) {
    const [equipment, student] = await Promise.all([
      this.equipmentRepository.findOneBy({ id: request.body.equipmentId }),
      this.studentRepository.findOneBy({ id: request.body.studentId }),
    ]);

    equipment.status = "UNAVAILABLE";

    const order = new Order();
    order.deliveredAt = getDeliveryDate();
    order.status = "LOCATED";
    order.equipment = equipment;
    order.student = student;

    return this.orderRepository.save(order)
  }

  // async update(request: Request, _response: Response, _next: NextFunction) {
  //   const order = await this.orderRepository.findOneBy({ id: request.params.id })

  //   const { action } = request.query;

  //   if (action === 'extend') {
  //     order.deliveredAt = getDeliveryDate();
  //   }

  //   if (action === 'delivery') {
  //     order.status = "DELIVERED";
  //     order.deliveredAt = getCurrentDate();
  //   }

  //   return this.orderRepository.save(order)
  // }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   let userToRemove = await this.orderRepository.findOneBy({ id: request.params.id })
  //   await this.orderRepository.remove(userToRemove)
  // }

}
