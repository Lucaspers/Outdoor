<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <router-link :to="{name: 'home'}" class="navbar-brand">Outdoor demo-store</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto"></ul>
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <router-link :to="{ name: 'login' }" class="nav-link" v-if="!isLoggedIn">Login</router-link>
                        <router-link :to="{ name: 'register' }" class="nav-link" v-if="!isLoggedIn">Register</router-link>
                        <span v-if="isLoggedIn">
                            <router-link :to="{ name: 'userboard' }" class="nav-link" v-if="user_type == 0"> Hello, {{name}}</router-link>
                            <router-link :to="{ name: 'admin' }" class="nav-link" v-if="user_type == 1"> Hello, {{name}}</router-link>
                        </span>
                        <li class="nav-link" v-if="isLoggedIn" @click="logout"> Logout</li>
                    </ul>
                </div>
            </div>
        </nav>
        <main class="py-4">
            <router-view @loggedIn="change"></router-view>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            user_type: 0,
            isLoggedIn: localStorage.getItem('Outdoor.jwt') != null
        }
    },
    mounted() {
        this.setDefaults()
    },
    methods : {
        setDefaults() {
            if (this.isLoggedIn) {
                let user = JSON.parse(localStorage.getItem('Outdoor.user'))
                this.name = user.name
                this.user_type = user.is_admin
            }
        },
        change() {
            this.isLoggedIn = localStorage.getItem('Outdoor.jwt') != null
            this.setDefaults()
        },
        logout(){
            localStorage.removeItem('Outdoor.jwt')
            localStorage.removeItem('Outdoor.user')
            this.change()
            this.$router.push('/')
        }
    }
}
</script>

<style>

.navbar {
    border-bottom: 1px solid #4b4b4b;
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 2;
}

.nav-link {
   color:  #6c757d !important;
}

.py-4 {
    padding-top: 80px !important;
}

h2.title {
    color: #000000e6;
    font-weight: 350;
    padding-bottom: 24px;
}

.box {
    border: 3px solid #4b4b4b;
    border-radius: 10px;
    margin: 1px;
    padding: 2px;
}

.product-box {
    margin-bottom: 15px;
}

</style>