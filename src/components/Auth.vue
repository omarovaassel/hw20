<template>
    <div class="wrapper">
        <input v-model="authData.login" type="text" placeholder="Логин" class="login">
        <input v-model="authData.password" type="text" placeholder="Пароль" class="password">

        <!-- показывает что вводим в инпут -->
        <!-- {{ authData.login }}
        {{ authData.password }} -->
        <button class="approve" v-on:click="authorizationClickHandler">Войти</button>
    </div>
  </template>
  
  <script>
//   export default {
//     name: 'Auth',
//     data: () => ({ //функция которая сразу возвращает объект
//         authData: {
//             login: '',
//             password: ''
//         }
//     }),
//     methods: {
//     buttonClickHandler: function () {
//         // alert('Test');
//         // window.location.href = "http://localhost:8080/auth";
//         // this.$router.push({ name: 'auth' });
//         this.authData.login
//         if(!this.authData.login && !this.authData.password){
//             alert('Заполните все поля');
//         }
//     }
//   }
//   }

export default {
    name: 'Auth',
    data: () => ({
        serverUrl: 'http://195.49.210.34/',
        authData: {
            login: '',
            password: ''
        },
        response: {}
    }),
    methods: {
        authorizationClickHandler: async function () {
            if(!this.authData.login || !this.authData.password)
            return alert('Заполните все поля')

            const request_body = {
                userData: {
                    login: this.authData.login,
                    password: this.authData.password
                }
            }
            const response = await this.sendRequest('user/authorization', "POST", request_body);

            console.log({response});            

            if (response.info.status === 'OK'){
                return alert(response.payload);
            }else this.$router.push({ name: 'home'});
        },

        sendRequest: async function (pathword, method, body) {
            const url = `${this.serverUrl}${pathword}`;
            const request_config = {
                method, // GET запрос
                headers: {
                    'Content-Type': 'application/json' // указываем что в запросе мы данные будем передавать в формате json
                },
                body: null // это данные, которые мы отправляем в формате JSON
            }

            if(method != 'GET') request_config.body = JSON.stringify(body);

            // отправляем данные на сервер вариант 2
            const response = await fetch (url, request_config)
            
            return await response.json();
        }
    }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="less"> 
  
  @font-face {
    font-family: 'Gordita Light';
    src: local('Gordita Light'), local('Gordita Light'),
    url('~@/assets/Gordita Light.woff') format('woff'),
  }
  body {
    font-family: 'Gordita Light';
  }
  .wrapper {
    display: grid;
    padding: 15px;
    .login, .password {
        margin: 5px auto;
        text-align: center;
        border: 1px solid grey;
        border-radius: 10rem;        
        width: 300px;
        height: 30px;
        font-family: 'Gordita Light';
        color: grey;
    }
    .approve {
        margin: 5px auto;
        text-align: center;
        border: 1px solid grey;
        border-radius: 10rem;
        width: 310px;
        height: 40px;
        padding: 5px;
        font-family: 'Gordita Light';
        color: white;
        background-color: grey;
    }
    .approve:hover {
        background-color: rgb(62, 62, 62);
    }
  }
  </style>
  