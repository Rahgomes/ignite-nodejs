import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute({ description, name }: IRequest): void {
        const specificationsAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationsAlreadyExists) {
            throw new Error("Specification already exists!");
        }

        this.specificationsRepository.create({ description, name });
    }
}

export { CreateSpecificationUseCase };
