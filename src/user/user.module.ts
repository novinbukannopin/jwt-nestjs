import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {CommentService} from "../comment/comment.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, CommentService]
})
export class UserModule {
}
