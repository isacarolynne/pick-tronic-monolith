import { NextFunction, Request, Response } from "express"

import { AppDataSource } from "../data-source"
import { Equipment } from "../entity/Equipments"

export class EquipmentController {

  private equipmentRepository = AppDataSource.getRepository(Equipment)

  async all(request: Request, response: Response, next: NextFunction) {
    return this.equipmentRepository.find()
  }

  // async one(request: Request, response: Response, next: NextFunction) {
  //   return this.equipmentRepository.findOneBy({ id: request.params.id })
  // }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.equipmentRepository.save(request.body)
  }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   let userToRemove = await this.equipmentRepository.findOneBy({ id: request.params.id })
  //   await this.equipmentRepository.remove(userToRemove)
  // }

}
