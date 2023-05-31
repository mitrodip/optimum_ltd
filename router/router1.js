import express from "express"

import UserCnotlor from "../contolar/UsrContlor.js"
const admin = express.Router()
admin.get("/", UserCnotlor.inDexdog)
admin.get("/gallary", UserCnotlor.gallarydog)
admin.get("/company", UserCnotlor.companydog)
admin.get("/meeting", UserCnotlor.mettingdog)
admin.get("/meeting1", UserCnotlor.meeting1dog)
admin.get("/portpolio", UserCnotlor.portpoliodog)

export default admin