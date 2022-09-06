<template>
  <v-container class="fill-height mx-4">
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" sm="8" md="5">
        <v-card class="mx-auto">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text class="text-center">
              <!-- <h2>Register</h2> -->
              <v-text-field
                v-model="loginInfo.name"
                prepend-icon="mdi-account"
                :rules="nameRules"
                label="Name*"
                required
              ></v-text-field>

              <v-text-field
                v-model="loginInfo.email"
                :rules="emailRules"
                prepend-icon="mdi-email"
                label="E-mail*"
                required
              ></v-text-field>

              <v-text-field
                v-model="loginInfo.password"
                :rules="passwordRules"
                prepend-icon="mdi-lock"
                label="Password*"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                required
              >
              </v-text-field>

              <v-btn
                block
                color="primary"
                class="mt-8"
                :disabled="!valid"
                @click="registerUser()"
              >
                Register
              </v-btn>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      loginInfo: {
        name: "",
        email: "",
        password: "",
      },
      showPassword: false,
      valid: true,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) =>
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            v
          ) || "Invalid Email Address",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => !(v.length < 6) || "Password must be of 6 characters or more",
        (v) =>
          !(v.split(" ").join("").length < v.length) ||
          "Password cannot contain spaces!",
      ],
    };
  },

  methods: {
    registerUser() {},
  },
};
</script>
