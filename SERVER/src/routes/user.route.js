import { Router } from "express";
import {
    loginuser,
    registerUser,
    logoutuser,
    refreshaccesstoken,
    changecurrentpassword,
    getcurrentuser,
    updateaccountdetails,
    getotheruser
}
    from "../controllers/user.controller.js";

    import { verifyJWT } from "../middlewares/auth.midlleware.js";

const router = Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginuser)

//seruce routes
router.route("/logout").post( verifyJWT ,logoutuser)
router.route("/refreshtoken").post(verifyJWT,refreshaccesstoken)
router.route("/changepassword").post(verifyJWT , changecurrentpassword)
router.route("/currentuser").get( verifyJWT , getcurrentuser)
router.route("/getotheruser").get( verifyJWT , getotheruser)
router.route("/updateaccount").patch(verifyJWT, updateaccountdetails)

export default router //can be imported by any name _eg RegisterUser