import {Injectable} from '@nestjs/common';
import {CreateUserDTO, UpdateUserDTO} from "./dto/createUserDTO";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    }

    async findOne(id: number) {
        return await this.userRepository.findOne({
            where: {
                id: id
            }
        })
    }

    async findOneWithUsername(username: string) {
        return await this.userRepository.findOne({
            where: {
                email: username
            }
        })
    }

    async create(createUserDTO: CreateUserDTO) {
        const user = this.userRepository.create(createUserDTO);
        await this.userRepository.save(user);
        const {password, ...result} = user;
        return result
    }

    async update(id: number, updateUserDTO: UpdateUserDTO) {
        return await this.userRepository.update(id, updateUserDTO);
    }
}
