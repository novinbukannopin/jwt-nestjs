import {Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as bcrypt from 'bcrypt';
import {User} from "../entities/user.entity";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private jwtService: JwtService) {
    }

    async validatorUser(username: string, password: string) {
        const user = await this.userService.findOneWithUsername(username);
        if (user && (await bcrypt.compare(password, user.password))) {
            const {password, ...result} = user;
            return result
        }
        return null
    }


    async login(user: User) {
        const payload = {
            username: user.email,
            sub: {
                name: user.name,
            }
        };

        return {
            ...user, access_token: this.jwtService.sign(payload)
        }
    }
}
