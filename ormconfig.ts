import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import {User} from "./src/entities/user.entity";
import {Topic} from "./src/entities/topic.entity";
import {Comment} from "./src/entities/comment.entity";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [User, Topic, Comment],
    synchronize: true,
}

export default config;