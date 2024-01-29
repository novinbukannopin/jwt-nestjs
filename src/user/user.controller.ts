import {Body, Controller, Get, Param, Patch, Post, Put, UseGuards} from '@nestjs/common';
import {CreateUserDTO, UpdateUserDTO} from "./dto/createUserDTO";
import {UserService} from "./user.service";
import {CommentService} from "../comment/comment.service";
import {JwtGuard} from "../auth/guards/jwt-auth.guard";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService, private readonly commentService: CommentService) {
    }

    @Get(':id')
    findOne(@Param("id") id: number) {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() createUserDTO: CreateUserDTO) {
        return this.userService.create(createUserDTO);
    }

    @UseGuards(JwtGuard)
    @Get(":id/comments")
    getUserComment(@Param("id") id: string) {
        return this.commentService.findUserComments(id);
    }

    @Put(":id")
    update(@Param("id") id: number, @Body() updateUserDTO: UpdateUserDTO) {
        return this.userService.update(id, updateUserDTO);
    }
}
