class UserModel {
    constructor(args) {
        this.db = args.db;
        this.model = args.model;
    }

    async registerUser(param) {
        const register = new this.model(
            param
        );
        await register.save();
        return register;
    }

    async getUsers() {
        const users = await this.model.find({}).select('-password');
        return users;
    }
}

module.exports = UserModel;