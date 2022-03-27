import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepostiory,
} from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepostiory {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, { name, description, created_at: new Date() });
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
}