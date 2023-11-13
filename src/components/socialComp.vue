<template>
  <div id="socialMainContainer">
    <div id="startBtn" @click="startGame">
      <h3 v-if="!started && !waiting">Start game</h3>
      <h3 v-else-if="started && waiting">Ready</h3>
      <h3 v-else-if="started && !waiting">Game started</h3>
    </div>
    <div id="chatBox">
      <div id="chatLog">
        <div v-for="(i, k) in msgs" :key="k">
          <div v-if="msgs[k].id == 'camilo'" class="ownMsg">
            {{ msgs[k].msg }}
          </div>
          <div v-else class="friendMsg">{{ msgs[k].msg }}</div>
        </div>
      </div>
      <div id="sendContainer">
        <input
          id="msgInput"
          v-model="currMsg"
          placeholder="Type a message"
          @keyup.enter="sendMsg"
        />
        <div id="sendMsg" @click="sendMsg">
          <v-icon icon="mdi-send"></v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "socialComp",
  data() {
    return {
      started: false,
      currMsg: "",
      msgs: [
        { id: "camilo", msg: "wolaaa" },
        {
          id: "nicolas",
          msg: "wolaaa",
        },
        { id: "camilo", msg: "puta" },
        { id: "camilo", msg: "asdsds" },
        { id: "nicolas", msg: "sdsaw23" },
      ],
      waiting: false,
    };
  },
  methods: {
    startGame() {
      if (!this.started) {
        this.started = true;
        this.waiting = true;
        document.getElementById("startBtn").style.backgroundColor = "gray";
      }
    },

    sendMsg() {
      console.log(this.currMsg);
      this.currMsg = "";
    },
  },
  watch: {
    waiting() {
      setTimeout(() => {
        this.waiting = false;
      }, 3000);
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  height: 10px;
  width: 0rem;
}
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  background-color: lightgrey;
  border-radius: 1rem;
}

#socialMainContainer {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content auto;
  width: 100%;
  height: 100%;
  text-align: center;
}

#startBtn {
  margin: 1rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  height: fit-content;
  background-color: aquamarine;
  border-radius: 2rem;
  transition: all 0.3s ease;
}

#startBtn:hover {
  transform: scale(1.05);
}

#chatLog {
  width: 89%;
  height: 90%;
  margin-left: 1rem;
  margin-bottom: 0.8rem;
  border: solid 1px gray;
  border-radius: 0.5rem;
  display: grid;
  grid-auto-rows: min-content;
}

#sendContainer {
  display: grid;
  grid-template-columns: auto auto;
}

#msgInput {
  border: solid 1px black;
  border-radius: 1rem;
  padding-left: 0.7rem;
  margin-left: 1.1rem;
  width: 90%;
  transition: all 0.3s ease;
}

#msgInput:hover {
  transform: scale(1.05);
}

#msgInput:focus {
  transform: scale(1.05);
}

#sendMsg {
  margin-right: 1rem;
  transition: all 0.3s ease;
}

#sendMsg:hover {
  transform: scale(1.1);
}

.ownMsg {
  text-align: center;
  padding: 0.3rem;
  margin: 0.5rem;
  background-color: aquamarine;
  width: fit-content;
  min-width: 5rem;
  max-width: 10rem;
  border-radius: 1rem 1rem 0 1rem;
  float: right;
}

.friendMsg {
  text-align: center;
  padding: 0.3rem;
  margin: 0.5rem;
  background-color: lightcoral;
  overflow: auto;
  width: fit-content;
  min-width: 5rem;
  max-width: 10rem;
  max-height: 10rem;
  border-radius: 1rem 1rem 1rem 0;
}
</style>
