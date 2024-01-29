import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";
import {Topic} from "./topic.entity";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number

    text: string

    @ManyToOne((type) => User, (user) => user.comments)
    user: User

    @ManyToOne((type) => Topic, (topic) => topic.comments)
    topic: Topic
}