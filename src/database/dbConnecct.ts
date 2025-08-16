import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../modules/users/user.entity";
import { Post } from "../modules/posts/post.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST || "localhost",
  port: Number(process.env.MYSQL_PORT || "3306"), // ໃຊ້ກໍບໍ່ເປັນຫຍັງ 10
  username: process.env.MYSQL_USERNAME || "root",
  password: process.env.MYSQL_PASSWORD || "root123",
  database: process.env.MYSQL_DATABASE || "mydatabase",
  synchronize: true, // use false in production
  logging: false,
  entities: [User, Post],
});

// type: 'mysql',
// host: 'localhost',
// port: 3306,
// username: 'root',
// password: 'root123',
// database: 'mydatabase',
// synchronize: true, // use false in production
// logging: false,
// entities: [User, Post],
