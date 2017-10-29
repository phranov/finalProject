document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('loginButton').addEventListener('click', function() {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (userList.login(username, password)) {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        } else {
            document.querySelector('p#error').textContent = 'Invalid useraname or password!';

            setTimeout(function() {
                document.querySelector('p#error').textContent = '';
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            }, 2000);
        }
    });

    document.getElementById('register').addEventListener('click', function() {
        event.preventDefault();
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';

        document.getElementById('save').addEventListener('click', function() {
            event.preventDefault();

            var username = document.getElementById('usernameReg').value;
            var password = document.getElementById('passwordReg').value;
            var email = document.getElementById('emailReg').value;

            userList.addUser(username, password, email);

            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('registerForm').style.display = 'none';
        });
    });
});