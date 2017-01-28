<template>
    <div>

        <md-card>
            <md-card-media>
                <!--<img src="assets/card-image-1.jpg" alt="People">-->
            </md-card-media>

            <md-card-header>
                <div class="md-title">
                    {{user.name}}
                </div>
                <div class="md-subhead">Registered: {{user.registered}}</div>
                 <div class="md-subhead">Age: {{user.age}}</div>
                  <div class="md-subhead">User Name: {{user.userName}}</div>
            </md-card-header>

            <md-card-actions>
                <md-button v-on:click="registerUser(user)">Register</md-button>
                <md-button v-on:click="unRegisterUser(user)">UnRegister</md-button>
            </md-card-actions>

            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,
                voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        name: 'user',
        props: ['user'],
        methods: {
            registerUser(user) {
                this.$store.commit('REGISTER_USER', user);
            },
            unRegisterUser(user) {
                this.$store.commit('UNREGISTER_USER', user);
            },
        }
    }
</script>

<style scoped>

</style>