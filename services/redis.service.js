import Redis from 'ioredis';


const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});
// REDIS_HOST=redis-11536.crce182.ap-south-1-1.ec2.redns.redis-cloud.com
// REDIS_PORT=11536
// REDIS_PASSWORD=0xUoer12BB5E56OCJizUl9U6Up7JbFCI

redisClient.on('connect', () => {
    console.log('Redis connected');
})

export default redisClient;