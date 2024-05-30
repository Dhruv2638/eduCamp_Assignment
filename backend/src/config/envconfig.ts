import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
  server: {
    PORT: process.env.PORT,
  },
};
