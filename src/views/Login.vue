<template>
    <div class="home">
        <Auth id="auth" v-on:click="buttonClickHandler" />
        <button class="alert" v-on:click="buttonClickHandler">Authorization</button>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  // импортируем наши компоненты
  import Auth from '@/components/Auth.vue'
  import Reg from '@/components/Reg.vue'
  

  // регистрируем наши компоненты
  export default {
    name: 'HomeView',
    components: {
      Auth,
      Reg
    },
  mounted () {  // функция, которая просто запускается при старте страницы, можно ее не писать
    // this.buttonClickHandler()
  },
  methods: {
    buttonClickHandler: function () {
        alert('Test');
        // window.location.href = "http://localhost:8080/auth";
        this.$router.push({ name: 'auth' });
    }
  }
}
  </script>
  