import express from "express";
import adminContolor from "../contolar/adminContlor.js";
const router = express.Router()




router.get("/", adminContolor.getAllDog)
router.get("/admin", adminContolor.admindDog)

router.post("/create", adminContolor.createDog)
router.post("/edite/:id", adminContolor.editeDog)
router.post("/update/:id", adminContolor.updatebyId)
router.post("/delete/:id", adminContolor.deletDog)



export default router