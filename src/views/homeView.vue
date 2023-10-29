<template>
  <div id="homeContainer">
    <navBar :acc="Account" :friend-list="fList" />
    <div>
      <div>a</div>
    </div>
  </div>
</template>

<script>
import navBar from "../components/navBar.vue";

export default {
  name: "HomePage",
  components: {
    navBar,
  },
  data() {
    return {
      Account: "Camilo",
      fList: { asdad: true, asdadasd: false, asddds: true },
    };
  },
  methods: {},
};
</script>

<style>
html {
  height: 100vh;
  width: 100vw;
}

#homeContainer {
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: rgb(44, 71, 98);
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: auto;
}
</style>
