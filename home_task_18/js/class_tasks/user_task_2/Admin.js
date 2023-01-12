class Admin extends User {
    constructor(login, email, age) {
        super(login, email, age, false);

    }

    ban(user) {
        if (user instanceof User) {
            user.isBanned = true;
            return;
        }
        throw new TypeError();
    }
    unBun(user) {
        if (user instanceof User) {
            user.isBanned = false;
            return;
        }
        throw new TypeError();
    }

    toggleBan(user) {
        if (user instanceof User) {
            user.isBanned = !user.isBanned;
            return;
        }
        throw new TypeError();
    }
}