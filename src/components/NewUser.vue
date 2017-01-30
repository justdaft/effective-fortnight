<template>
  <div>
    <md-button class="md-raised md-primary" v-on:click="addUser">Add to List</md-button>

    <md-input-container class="myInput">
      <md-input v-model="newUser.name" placeholder="name"></md-input>
      <md-input v-model="newUser.age" placeholder="age"></md-input>
      <md-input v-model="newUser.userName" placeholder="user name"></md-input>
      <span class="md-primary md-input">Registered: <md-checkbox id="my-test2" name="my-test2" v-model="newUser.registered" ></md-checkbox></span>

    </md-input-container>
  </div>
</template>

<script>
  export default {
    name: 'new-user',
    data() {
      return {
        newUser: { name: '', age: null, userName: '', registered: false },
      }
    },
    methods: {
      addUser() {

      }
    }
  }
</script>

<style scoped>

</style>