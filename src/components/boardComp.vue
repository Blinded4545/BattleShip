<template>
  <div id="bContainer">
    <div id="board">
      <div v-for="(i, k) in tileArr" :key="k"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "boardComp",
  data() {
    return {
      //prettier-ignore
      tileArr: ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9",
                "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9",
                "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9",
                "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9",
                "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9",
                "g0", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9",
                "h0", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9",
                "i0", "i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9",
                "j0", "j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9",
                "k0", "k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9"],
    };
  },
};
</script>

<style>
#bContainer {
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
}
#board {
  display: grid;
  width: auto;
  grid-template-columns: repeat(10, 3rem);
  justify-content: center;
  align-items: center;
  text-align: center;
}

#board > div {
  border: solid 1px black;
  padding: 0;
  width: 3rem;
  height: 3rem;
  transition: all 0.2s ease-in-out;
}

#board > div:hover {
  background-color: rgba(143, 188, 143);
}
</style>
