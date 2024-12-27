import { createClient } from "redis";
import {config} from "dotenv"

config()

const redisClient = createClient({
    url : process.env.REDIS_URL
});
redisClient.connect();

export default redisClient