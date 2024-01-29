import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {UserService} from "../user/user.service";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {LocalStrategy} from "./strategis/local-strategy";
import {User} from "../entities/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {JwtStrategy} from "./strategis/jwt-strategy";

@Module({
    providers: [AuthService, UserService, LocalStrategy, JwtStrategy, UserService],
    controllers: [AuthController],
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: `${process.env.JWT_SECRET}`,
            signOptions: {expiresIn: '3600s'}
        })]
})
export class AuthModule {
}
