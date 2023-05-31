class UserCnotlor {
    static inDexdog = async(req, res) => {
        res.render("index")
    }
    static gallarydog = async(req, res) => {
        res.render("gallary")
    }
    static mettingdog = async(req, res) => {
        res.render("meeting")
    }
    static meeting1dog = async(req, res) => {
        res.render("meetings1")
    }
    static portpoliodog = async(req, res) => {
        res.render("portpolio")
    }
    static companydog = async(req, res) => {
        res.render("company")
    }

}
export default UserCnotlor