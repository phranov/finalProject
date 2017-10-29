var userList = (function() {
    function User(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    function UserList() {
        if (localStorage.getItem('users') != null)
            this._users = JSON.parse(localStorage.getItem('users'));
        else {
            this._users = [new User('admin', 'admin', 'admin@admin.com')];
            localStorage.setItem('users', JSON.stringify(this._users));
        }
    }

    UserList.prototype.addUser = function(username, password, email) {
        if ((typeof username == 'string') && (username.trim().length > 3) &&
            (password.trim().length > 3) && email) {
            if (!(this._users.some(user => user.username === username))) {
                this._users.push(new User(username, password, email));
                localStorage.setItem('users', JSON.stringify(this._users));
            }
        }
    }


    UserList.prototype.login = function(username, password) {
        return this._users.some(user => user.username === username &&
            user.password === password);
    }

    return new UserList();
})();