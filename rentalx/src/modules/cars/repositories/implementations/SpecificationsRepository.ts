import { Specification } from "../../entities/Specification";
import {
    ICreateSpecificationsDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance() {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationsDTO): void {
        const specifications = new Specification();

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specifications);
    }

    findByName(name: string): Specification {
        const specifications = this.specifications.find(
            (specification) => specification.name === name
        );
        return specifications;
    }
}

export { SpecificationsRepository };
