import {Body, Controller, Injectable, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {CreateUserDTO} from "../user/dto/createUserDTO";
import {UserService} from "../user/user.service";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService, private userService: UserService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user)
    }

    @Post('register')
    async register(@Body() createUserDTO: CreateUserDTO) {
        return await this.userService.create(createUserDTO)
    }

}
