import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
  server: {
    PORT: process.env.PORT,
  },
  auth: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
  },
};
