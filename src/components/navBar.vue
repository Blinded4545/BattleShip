<template>
  <v-app
    style="
      width: fit-content;
      overflow-x: hidden;
      display: grid;
      grid-template-columns: auto, auto;
      grid-template-areas: 'btns drawers';
    "
  >
    <!--              -->
    <!-- Icon Drawers -->
    <!--              -->

    <v-navigation-drawer
      permanent
      style="
        width: fit-content;
        background-color: rgb(92, 122, 153);
        grid-area: btns;
      "
    >
      <v-list density="compact">
        <v-list-item
          style="padding: 0.4rem; margin: 0.3rem"
          class="btnBar"
          @click="toggleDrawer('account')"
        >
          <v-icon icon="mdi-arch"></v-icon>
        </v-list-item>
        <v-list-item
          style="padding: 0.4rem; margin: 0.3rem"
          class="btnBar"
          @click="toggleDrawer('friends')"
        >
          <v-icon icon="mdi-account-group"></v-icon>
        </v-list-item>
        <v-list-item
          style="padding: 0.4rem; margin: 0.3rem"
          class="btnBar"
          @click="toggleDrawer('info')"
        >
          <v-icon icon="mdi-information"></v-icon>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div style="width: fit-content">
          <v-list-item
            @click="logOut"
            style="padding: 0.4rem; margin: 0.3rem; margin-bottom: 0.6rem"
            class="btnBar"
          >
            <v-icon icon="mdi-logout-variant"></v-icon
          ></v-list-item>
        </div>
      </template>
    </v-navigation-drawer>

    <!--                  -->
    <!-- Function Drawers -->
    <!--                  -->

    <!-- ACCOUNT -->

    <v-navigation-drawer
      v-model="accDrawer"
      id="accDrawer"
      class="drawers"
      style="
        grid-area: drawers;
        left: calc(3rem - 1px);
        background-color: rgb(100, 137, 174);
        display: inline;
      "
    >
      <v-list>
        <v-list-item
          style="
            display: grid;
            justify-content: center;
            align-items: center;
            text-align: center;
          "
        >
          <div style="font-size: 3rem; margin-top: 2rem; margin-bottom: 1rem">
            <v-icon icon="mdi-arch" style="text-align: center"></v-icon>
          </div>
          <div>
            <h1>{{ acc }}</h1>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- FRIENDS -->

    <v-navigation-drawer
      v-model="friendsDrawer"
      id="friendsDrawer"
      class="drawers"
      style="
        grid-area: drawers;
        left: calc(3rem - 1px);
        background-color: rgb(100, 137, 174);
        display: inline;
      "
    >
      <v-list>
        <v-list-item
          style="
            display: grid;
            justify-content: center;
            align-items: center;
            text-align: center;
          "
        >
          <div style="font-size: 3rem; margin-top: 2rem; margin-bottom: 1rem">
            <v-icon
              icon="mdi-account-group"
              style="text-align: center"
            ></v-icon>
          </div>
          <v-list style="display: grid; grid-template-columns: auto">
            <v-list-item
              v-for="(i, k, j) in friendList"
              :key="j"
              style="text-align: left; display: grid"
            >
              <h3 style="display: inline-block; margin: 1rem; text-align: left">
                {{ k }}
              </h3>
              <v-icon
                v-if="i"
                icon="mdi-connection"
                color="green"
                style="text-align: right; display: inline"
              ></v-icon>
              <v-icon v-else icon="mdi-connection" color="red"></v-icon>
            </v-list-item>
          </v-list>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ABOUT -->

    <v-navigation-drawer
      v-model="infoDrawer"
      id="infoDrawer"
      class="drawers"
      style="
        display: inline;
        grid-area: drawers;
        left: calc(3rem - 1px);
        background-color: rgb(100, 137, 174);
      "
    >
      <v-list>
        <v-list-item>
          <v-icon icon="mdi-information"></v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "navBar",
  props: {
    acc: String,
    friendList: { String: Boolean },
  },
  data() {
    return {
      accDrawer: false,
      friendsDrawer: false,
      infoDrawer: false,
    };
  },
  methods: {
    toggleDrawer(selectedDrawer) {
      if (selectedDrawer == "info") {
        if (this.infoDrawer) {
          this.infoDrawer = false;
        } else {
          this.infoDrawer = true;
        }
        this.accDrawer = false;
        this.friendsDrawer = false;
      }
      if (selectedDrawer == "account") {
        if (this.accDrawer) {
          this.accDrawer = false;
        } else {
          this.accDrawer = true;
        }
        this.infoDrawer = false;
        this.friendsDrawer = false;
      }
      if (selectedDrawer == "friends") {
        if (this.friendsDrawer) {
          this.friendsDrawer = false;
        } else {
          this.friendsDrawer = true;
        }
        this.infoDrawer = false;
        this.accDrawer = false;
      }
    },
    logOut() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.btnBar {
  transition: all 0.3s ease;
}

.btnBar:hover {
  background-color: lightslategray;
  border-radius: 0.5rem;
}

#infoDrawer {
  transition: all 1s ease-in-out;
}
#friendsDrawer {
  transition: all 1s ease-in-out;
}
#accDrawer {
  transition: all 1s ease-in-out;
}

.drawers {
  background-color: rgb(92, 122, 153);
}
</style>
