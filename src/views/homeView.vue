<template>
  <div id="homeContainer">
    <navBar id="nav" :acc="Account" :friend-list="fList" />
    <div id="gameWrapper">
      <div id="boardWrapper">
        <div id="board"></div>
        <div id="options"></div>
        <div id="ui"></div>
      </div>
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

#nav {
  min-width: calc(3rem - 1px);
}

#homeContainer {
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: rgb(44, 71, 98);
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: auto;
}

#gameWrapper {
  background-color: red;
  position: left;
  display: grid;
  align-items: center;
  justify-content: center;
}

#boardWrapper {
  background-color: green;
  width: 90vw;
  height: 88vh;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "board chat";
}

#board {
  grid-area: board;
  background-color: gray;
  width: 140%;
  height: 100%;
  float: left;
}

#options {
  grid-area: board;
  float: left;
  width: 40%;
  height: 100%;
  background-color: aquamarine;
}

#ui {
  grid-area: chat;
  background-color: beige;
  width: 60%;
  justify-self: right;
}
</style>
