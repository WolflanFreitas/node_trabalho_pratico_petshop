import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
    process.env.CONNECTION_STRING,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);

export default sequelize;