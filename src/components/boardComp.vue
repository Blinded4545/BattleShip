<template>
  <div id="bContainer">
    <div id="board">
      <div
        v-for="(i, k) in tileArr"
        :key="k"
        :id="i"
        @click="hitTile(i)"
        style="background-color: red"
      >
        <img id="img" src="" cover />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "boardComp",
  props: {
    orientation: String,
    deleteMode: Boolean,
    currShip: String,
    shipSize: Number,
  },
  data() {
    return {
      currentShip: this.currShip,

      //prettier-ignore
      tileArr: ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9",
                "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9",
                "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9",
                "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9",
                "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9",
                "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9",
                "g0", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9",
                "h0", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9",
                "i0", "i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9",
                "j0", "j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9"],
      placed: {
        cruiser: 0,
        destroyer: 0,
        submarine: 0,
        carrier: 0,
        battleship: 0,
      },

      imgUrls: {
        cruiser: "../assets/CruiserUpperView.png",
        carrier: "../assets/CarrierUpperView.png",
        battleship: "../assets/BattleShipUpperView.png",
        submarine: "../assets/SubmarineUpperView.png",
        destroyer: "../assets/DestroyerUpperView.png",
      },
    };
  },
  methods: {
    hitTile(tile) {
      if (this.placed[this.currShip] > 0) {
        return;
      }

      let curr = document.getElementById(tile).style.backgroundColor;
      let selectedTilesArr;

      console.log(this.deleteMode);

      if (this.deleteMode) {
        selectedTilesArr = this.removeShip(tile, this.orientation);
      } else {
        selectedTilesArr = this.markTiles(tile, this.orientation);
      }
      //console.log(selectedTilesArr);

      if (selectedTilesArr == null) {
        return;
      }

      if (curr != "red") {
        selectedTilesArr.forEach(
          (e) => (document.getElementById(e).style.backgroundColor = "red")
        );
      } else if (curr == "red") {
        console.log(this.currShip);

        selectedTilesArr.forEach((e) => {
          switch (this.currShip) {
            case "carrier": //-----------Carrier-----------
              document.getElementById(e).firstChild.src =
                "../assets/CarrierUpperView.png";
              document.getElementById(e).style.backgroundColor = "purple";
              this.placed[this.currShip] += 1;
              break;

            case "cruiser": //-----------Cruiser-----------
              document.getElementById(e).firstChild.src = "../assets/logo.png";
              document.getElementById(e).style.backgroundColor = "gray";
              this.placed[this.currShip] += 1;
              break;

            case "battleship": //-----------Battleship-----------
              document.getElementById(e).style.backgroundColor = "transparent";

              this.placed[this.currShip] += 1;
              break;

            case "destroyer": //-----------Destroyer-----------
              document.getElementById(e).style.backgroundColor = "orange";
              this.placed[this.currShip] += 1;
              break;

            case "submarine": //-----------Submarine-----------
              document.getElementById(e).firstChild.src =
                "/../assets/SubmarineSideView.png";
              document.getElementById(e).style.backgroundColor = "blue";
              this.placed[this.currShip] += 1;
              break;
          }
        });
      }
    },

    markTiles(tile, orientation) {
      if (document.getElementById(tile).style.backgroundColor == "red") {
        let arr;
        if (orientation == "col") {
          arr = this.tileArr.filter(
            (res) =>
              res.indexOf(tile[1]) !== -1 && //With this you get all the tiles of the column
              this.tileArr.indexOf(res) >= this.tileArr.indexOf(tile) && //This you get the tiles in the same column and after the selected tile
              this.tileArr.indexOf(res) <=
                this.tileArr.indexOf(tile) + (this.shipSize - 1) * 10 //With this you limit to the next four tiles in a column
          );
        } else if (orientation == "row") {
          arr = this.tileArr.filter(
            (res) =>
              res.indexOf(tile[0]) !== -1 && //With this you get all the tiles of the column
              this.tileArr.indexOf(res) >= this.tileArr.indexOf(tile) && //This you get the tiles in the same column and after the selected tile
              this.tileArr.indexOf(res) <=
                this.tileArr.indexOf(tile) + this.shipSize - 1 //With this you limit to the next four tiles in a column
          );
        }

        console.log(arr);

        if (arr.length < this.shipSize) {
          return [];
        }

        arr.forEach((e) => {
          if (document.getElementById(e).style.backgroundColor != "red") {
            arr = [];
          }
        });
        return arr;
      }
    },

    removeShip(tile, orientation) {
      if (document.getElementById(tile).style.backgroundColor == "red") {
        return [];
      }

      let arr;

      if (orientation == "col") {
        arr = this.tileArr.filter(
          (res) =>
            res.indexOf(tile[1]) !== -1 && //With this you get all the tiles of the column
            this.tileArr.indexOf(res) >= this.tileArr.indexOf(tile) && //This you get the tiles in the same column and after the selected tile
            this.tileArr.indexOf(res) <= this.tileArr.indexOf(tile) + 30 && //With this you limit to the next four tiles in a column
            document.getElementById(res).style.backgroundColor == "blue"
        );
      } else if (orientation == "row") {
        arr = this.tileArr.filter(
          (res) =>
            res.indexOf(tile[0]) !== -1 && //With this you get all the tiles of the row
            this.tileArr.indexOf(res) >= this.tileArr.indexOf(tile) && //This you get the tiles in the same row and after the selected tile
            this.tileArr.indexOf(res) <= this.tileArr.indexOf(tile) + 3 && //With this you limit to the next four tiles in a row
            document.getElementById(res).style.backgroundColor == "blue"
        );
      }

      console.log(arr);

      if (arr.length == 4) {
        //Return if everything is right
        return arr;
      }

      switch (arr.length) {
        case 1:
          if (orientation == "row") {
            console.log("a");
          }
          break;
      }
    },
  },
  watch: {
    currentShip() {
      if (this.currShip == "battleship") {
        document.getElementById("bContainer").style.cursor =
          "url('BattleShipUpperView.png')";
      }
    },
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
  transition: all 0.1s ease-in-out;
}

#board > div:hover {
  background-color: rgba(143, 188, 143);
}

#board > div > div {
  width: 100%;
  height: 100%;
}
</style>
