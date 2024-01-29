import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
    findUserComments(userId: string){
        return "this comment of the user" + userId
    }
}
