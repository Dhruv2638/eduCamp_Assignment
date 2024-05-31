import { Router } from "express";
import {
  register,
  login,
  googleAuthCallback,
} from "../controllers/authController";
import passport from "passport";

const router: Router = Router();

router.post("/register", register);
router.post("/login", login);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleAuthCallback
);

export default router;
