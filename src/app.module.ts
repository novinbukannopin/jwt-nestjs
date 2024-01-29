import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {UserModule} from './user/user.module';
import {CommentModule} from './comment/comment.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from './auth/auth.module';
import config from "../ormconfig";
import {AppService} from "./app.service";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [UserModule, CommentModule, TypeOrmModule.forRoot(config), ConfigModule.forRoot(), AuthModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}