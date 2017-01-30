<template>
    <div>

        <md-card >
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
                <md-button class="md-primary md-raised btn" v-if="!user.registered" v-on:click="registerUser(user)">Register</md-button>
                <md-button class="md-primary md-raised btn" v-if="user.registered" v-on:click="unRegisterUser(user)">UnRegister</md-button>
            </md-card-actions>
            <md-card-content class="star-six">

            </md-card-content >
            <!--<md-card-content class="square">

            </md-card-content >-->
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
.btn {
    width: 120px;
}

.square {
	width: 100px;
	height: 100px;
	background: red;
}


</style>