<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">effective-fortnight</h1>
    </md-toolbar>
    <br>
    <md-layout md-gutter md-gutter="16">
      <md-layout md-column >
        <md-card>
          <md-card-header>
            <div class="md-title">
              UnRegistered
            </div>
          </md-card-header>
          <md-card-content>
            <md-list>
              <md-list-item v-for="user in unRegisteredUsers" v-on:click="selectUser(user)">
                <md-icon>
                  person
                </md-icon>
                <div class="md-list-text-container">
                  <span> {{user.name}}</span>
                </div>
              </md-list-item>
            </md-list>
          </md-card-content>
        </md-card>
      </md-layout>
      <md-layout md-column>
        <md-card>
          <md-card-header>
            <div class="md-title">
              Registered
            </div>
          </md-card-header>
          <md-card-content>
            <md-list>
              <md-list-item v-for="user in registeredUsers" v-on:click="selectUser(user)">
                <md-icon>
                  person
                </md-icon>
                <div class="md-list-text-container">
                  <span> {{user.name}}</span>
                </div>
              </md-list-item>
            </md-list>
          </md-card-content>
        </md-card>
      </md-layout>
    </md-layout>
    <br>
    <user :user="selectedUser">User Details</user>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import User from './components/User';
  import NewUser from './components/NewUser';


  export default {
    name: 'app',
    data() {
      return {
        selectedUser: '',
        selectedData: [],
        newUser: { name: '', age: null, userName: '', registered: false },
      }
    },
    computed: mapGetters(
      [
        'unRegisteredUsers',
        'registeredUsers'
      ]
    ),
    methods: {
      selectUser(user) {
        this.selectedUser = user;
        console.log('user: ', user);
      },
      addUser() {
        this.$store.commit('ADD_USER', this.newUser);
        this.newUser = { name: '', age: null, userName: '' };
      }
    },
    components: {
      User,
      NewUser
    }
  }
</script>

<style>
#app {
  margin: 10px;
  
  
}


</style>