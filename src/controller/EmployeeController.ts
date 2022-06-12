import { NextFunction, Request, Response } from "express"

import { AppDataSource } from "../data-source"
import { Employee } from "../entity/Employee"

export class EmployeeController {

  private employeeRepository = AppDataSource.getRepository(Employee)

  async all(request: Request, response: Response, next: NextFunction) {
    return this.employeeRepository.find()
  }

  // async one(request: Request, response: Response, next: NextFunction) {
  //   return this.employeeRepository.findOneBy({ id: request.params.id })
  // }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.employeeRepository.save(request.body)
  }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   let userToRemove = await this.employeeRepository.findOneBy({ id: request.params.id })
  //   await this.employeeRepository.remove(userToRemove)
  // }

}
