<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-list>
        <template>
          <v-list-item
            v-for="(item, index) in items"
            :key="item.title"
            :to="item.to"
            @click="changeTab(item, index)"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <!-- <v-spacer />
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <v-btn text>Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text>Login</v-btn>
        <v-btn text>Register</v-btn>
      </div> -->
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: "mdi-login",
          title: "Login",
          to: "/login",
          // withoutLoginShow: this.$auth.loggedIn ? false : true,
        },
        {
          icon: "mdi-account-plus",
          title: "Register",
          to: "/register",
          // withoutLoginShow: this.$auth.loggedIn ? false : true,
        },
        // {
        //   icon: "mdi-logout",
        //   title: "Logout",
        //   to: "/",
        //   // withoutLoginShow: this.$auth.loggedIn ? true : false,
        // },
      ],
      title: "KhataBook",
    };
  },
  methods: {
    changeTab(a, b) {
      console.log(a, b);
    },
  },
  mounted() {
    console.log("this.$auth", this.$auth, this.$auth.loggedIn);
  },
};
</script>
