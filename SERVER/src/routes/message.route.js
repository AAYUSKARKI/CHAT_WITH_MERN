import { Router } from "express";
import { sendmessage, getmessage } from "../controllers/message.controller";
import { verifyJWT } from "../middlewares/auth.midlleware.js";

const router = Router()

router.route("/sendmessage/:id").post(verifyJWT,sendmessage)
router.route("/getmessage/:id").post(verifyJWT,getmessage)