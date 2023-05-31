import adminModel from "../model/userModel.js"
class adminContolor {
    static getAllDog = async(req, res, next) => {
        try {
            const ruslt = await adminModel.find()
            res.render("list", { data: ruslt })

            next()
        } catch (error) {
            console.log(error)
        }
    }
    static createDog = async(req, res, next) => {
        try {



            const { name, order, quntty, color } = req.body
            const doc = new adminModel({
                name: name,
                order: order,
                quntty: quntty,
                color: color
            })
            const reslt = await doc.save()
            res.render("create")
            next()

        } catch (error) {

        }
    }
    static editeDog = async(req, res, next) => {
        try {

            const sdata = req.params.id
            const fullData = await adminModel.findById(sdata)
            res.render("edite", { data: fullData })
            console.log(fullData)
            next()
        } catch (error) {
            console.log(error)
        }

    }
    static updatebyId = async(req, res, next) => {
        try {
            //console.log(req.body)
            //console.log(req.params.id)
            const result = await adminModel.findByIdAndUpdate(req.params.id, req.body)

            res.redirect("/des")
            next()

        } catch (error) {
            console.log(error)
        }

    }

    static deletDog = async(req, res, next) => {
        try {
            const rest = await adminModel.findByIdAndDelete(req.params.id)
            res.redirect("/des")
            next()

        } catch (error) {
            console.log(error)
        }
    }
    static admindDog = async(req, res) => {
        res.render("create")


    }

}
export default adminContolor