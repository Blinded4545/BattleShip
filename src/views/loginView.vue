<template>
  <div id="container">
    <div id="main-wrapper"></div>
    <div id="login-wrapper">
      <div id="login-card">
        <div id="form-wrapper">
          <h2
            style="
              margin: 1rem;
              font-size: 1.7rem;
              font-family: 'Playfair Display', serif;
            "
          >
            Log in
          </h2>
          <div id="input-wrapper" style="margin: 1rem">
            <v-text-field
              label="Username"
              variant="outlined"
              prepend-icon="mdi-account"
              v-model="usr"
            ></v-text-field>
            <v-text-field
              label="Password"
              variant="outlined"
              prepend-icon="mdi-account-key"
              v-model="pwd"
            ></v-text-field>
            <v-btn
              class="btn"
              style="margin-right: 1rem"
              :loading="loadingLogin"
              @click="login"
              variant="tonal"
              >Log in</v-btn
            >
            <v-btn
              class="btn"
              :loading="loadingRegister"
              @click="register"
              variant="tonal"
              >Register</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginView",
  data() {
    return {
      usr: "",
      pwd: "",
      loadingLogin: false,
      loadingRegister: false,
    };
  },
  methods: {
    login() {
      this.loadingLogin = true;
      setTimeout(
        () => ((this.loadingLogin = false), this.$router.push("/home")),
        1000
      );
    },
    register() {
      this.loadingRegister = true;
      setTimeout(() => (this.loadingRegister = false), 1000);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

html {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

#container {
  height: 100vh;
  margin: 0;
  background-image: url("../assets/pngtree-three-old-ships-are-sailing-through-the-ocean-picture-image_2693535.jpg");
  background-size: cover;
}

#main-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: linear-gradient(
    90deg,
    rgba(30, 30, 30, 0.5),
    rgba(0, 0, 0, 0.7)
  );
}

#login-wrapper {
  text-align: center;
  display: grid;
  justify-content: right;
}

#login-card {
  filter: brightness(100%);
  height: 100vh;
  background-color: rgba(62, 75, 79, 0.3);
  backdrop-filter: blur(5px);
  display: grid;
  align-items: center;
  justify-content: center;
}

#form-wrapper {
  margin-right: 6rem;
  margin-left: 6rem;
  background-color: white;
  border-radius: 8px;
}

.btn {
  transition: all 1s ease-in-out;
}

.btn:hover {
  background-color: lightslategray;
}
</style>
