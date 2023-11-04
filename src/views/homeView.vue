<template>
  <div id="homeContainer">
    <navBar id="nav" :acc="Account" :friend-list="fList" />
    <div id="gameWrapper">
      <div id="UIWrapper">
        <div id="boardCont">
          <div id="board"></div>
        </div>
        <div id="options">
          <div id="piecesContainer">
            <div id="carrier"></div>
            <div id="battleShip"></div>
            <div id="cruiser"></div>
            <div id="submarine"></div>
            <div id="destroyer"></div>
          </div>
          <div id="buttonsWrapper">
            <div id="removePiece">
              <v-icon icon="mdi-delete-outline" id="removeIcon"></v-icon>
            </div>
            <div id="movePieces">
              <v-icon icon="mdi-arrow-all" id="moveIcon"></v-icon>
            </div>
          </div>
        </div>
        <div id="chat"></div>
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
  position: left;
  display: grid;
  align-items: center;
  justify-content: center;
}

#UIWrapper {
  background-color: gray;
  border-radius: 10px;
  width: 91vw;
  margin-right: 1rem;
  height: 95vh;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "board chat";
}

#boardCont {
  border-radius: 10px;
  grid-area: board;
  background-color: gray;
  width: 140%;
  height: 100%;
  float: left;
}

#options {
  grid-area: board;
  border-radius: 10px;
  width: 40%;
  height: 100%;
  background-color: aquamarine;
  display: grid;
  grid-template-rows: auto min-content;
}

/* PIECES BUTTONS */

#piecesContainer > div {
  margin: 1rem;
  margin-top: 1.5rem;
  transition: all 0.2s ease-in-out;
}

#piecesContainer > div:hover {
  transform: scale(1.1);
}

#carrier {
  height: 5rem;
  background-image: url("../assets/CarrierSideView.png");
  background-size: contain;
}
#battleShip {
  height: 5rem;
  background-image: url("../assets/BattleshipSideView.png");
  background-size: contain;
}
#cruiser {
  height: 5rem;
  background-image: url("../assets/CruiserSideView.png");
  background-size: contain;
}
#submarine {
  height: 5rem;
  background-image: url("../assets/SubmarineSideView.png");
  background-size: contain;
}
#destroyer {
  height: 5rem;
  background-image: url("../assets/DestroyerSideView.png");
  background-size: contain;
}

/* REMOVE AND MOVE BUTTONS */

#buttonsWrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  height: fit-content;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  border-radius: 10px;
  margin: 1rem;
}

#buttonsWrapper > div {
  margin: 0.5rem 0 0.5rem 0;
  transition: all 0.1s ease;
}

#removePiece {
  border-right: solid 1px black;
}
#movePieces {
  border-left: solid 1px black;
}

#movePieces:hover,
#removePiece:hover {
  color: red;
  border: none;
  transform: scale(1.4);
}

#chat {
  grid-area: chat;
  border-radius: 10px;
  background-color: beige;
  width: 60%;
  justify-self: right;
}
</style>
