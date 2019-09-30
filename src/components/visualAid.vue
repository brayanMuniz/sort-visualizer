<template>
  <div>
    <button @click="fillData()">Reset</button>
    <button @click="bubbleSort()">Bubble Sort</button>
    <button @click="insertionSort()">insertionSort</button>
    <button @click="animteTest()">Animate Test</button>
    <button @click="replaceValueTest()">kek</button>
    <BarChart :chartData="chartData" :styles="myStyles"></BarChart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BarChart from "./BarChart.vue";
import { dataSet, barDataType } from "@/types/barTypes";

export default Vue.extend({
  components: {
    BarChart
  },
  name: "visualAid",
  props: {
    numberOfBars: {
      type: Number,
      default: 5
    },
    highestNumber: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      dataCollection: {
        labels: [],
        datasets: [
          {
            backgroundColor: ["red", "blue", "blue", "blue", "blue", "blue"],
            data: []
          }
        ]
      } as barDataType,
      height: 300
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      // Todo: look for a good blue to set as a default and a red to indicate that it was selected
      // ? Should I only work with one dataSet and work with its data property
      // ? How would I be able to change its color to red when "selected"
      // Todo: Figure out what it is I want and what I need
      this.dataCollection = {
        labels: [],
        datasets: [
          {
            backgroundColor: ["red", "blue", "blue", "blue", "blue", "blue"],
            data: []
          }
        ]
      };
      for (let i = 0; i < this.numberOfBars; i++) {
        this.dataCollection.labels.push(i);
        this.dataCollection.datasets[0].data.push(this.getRandomInt());
      }
    },
    getRandomInt(): number {
      return (
        Math.floor(Math.random() * 3 * Math.random() * this.highestNumber) + 1
      );
    },
    // !Figured out why it does not animate!!!!
    // If you push data it changes it, but if you replace it, it does not animate
    bubbleSort() {
      // const dataSetLength = this.dataCollection.datasets[0].data.length;
      // for (let i = 0; i < dataSetLength; i++) {
      //   for (let j = 0; j < dataSetLength - 1 - i; j++) {
      //     let left = this.dataCollection.datasets[0].data[j];
      //     let right = this.dataCollection.datasets[0].data[j + 1];
      //     if (left > right) {
      //       this.dataCollection.datasets[0].data[j] = right;
      //       this.dataCollection.datasets[0].data[j + 1] = left;
      //       this.dataCollection.datasets[0].data.push(0);
      //       this.dataCollection.labels.push(0);
      //     }
      //   }
      // }
      let previousData = this.dataCollection.datasets[0].data;
      this.dataCollection = {
        labels: [],
        datasets: [
          {
            backgroundColor: ["red", "blue", "blue", "blue", "blue", "blue"],
            data: []
          }
        ]
      };
      const dataSetLength = previousData.length;
      for (let i = 0; i < dataSetLength; i++) {
        for (let j = 0; j < dataSetLength - 1 - i; j++) {
          let previousColors = this.dataCollection.datasets[0].backgroundColor;
          if (previousColors)
            this.dataCollection.datasets[0].backgroundColor = this.changeBackgroundColor(
              previousColors,
              j,
              j + 1
            );

          let left = previousData[j];
          let right = previousData[j + 1];
          if (left > right) {
            previousData[j] = right;
            previousData[j + 1] = left;
          }
        }
        this.dataCollection.labels.push(i);
        this.dataCollection.datasets[0].data = previousData;
      }
    },
    // red means selected
    changeBackgroundColor(
      array: Array<string>,
      prePositionOfBar: number,
      postPositionOfBar: number
    ): Array<string> {
      array[prePositionOfBar] = "blue";
      array[postPositionOfBar] = "red";
      return array;
    },
    insertionSort() {
      // Todo: post this on stack overflow and while someone finds a solution, Do more algo probnlems
      const dataSetLength = this.dataCollection.datasets[0].data.length;
      for (let i = 0; i < dataSetLength; i++) {
        console.log(BarChart);
        let sorted = false;
        let counter = i;
        while (!sorted) {
          if (counter === 0 || counter == dataSetLength) {
            sorted = true;
          }
          // Compare and go backwards
          let left = this.dataCollection.datasets[0].data[counter];
          let right = this.dataCollection.datasets[0].data[counter + 1];
          if (right < left) {
            this.dataCollection.datasets[0].data[counter] = right;
            this.dataCollection.datasets[0].data[counter + 1] = left;
            counter--;
          } else {
            sorted = true;
          }
        }
      }
    },
    // Todo: parameter1: dataType to change this.dataCollection, and parameter2 is which dataset
    changeData(newNumber: number, dataSetIndex: number, dataIndex: number) {
      this.dataCollection.datasets[dataSetIndex].data[dataIndex] = newNumber;
    },
    replaceValueTest() {
      this.dataCollection.datasets[0].data[0] = 7;
    },
    animteTest() {
      let dataHolder = this.dataCollection;
      this.dataCollection = {
        labels: [],
        datasets: [
          {
            backgroundColor: "#f87979",
            data: []
          }
        ]
      };
      for (var i = 0; i < 5; i++) {
        dataHolder.datasets[0].data.forEach((data, index) => {
          this.dataCollection.labels.push(index);
          this.dataCollection.datasets[0].data.push(this.getRandomInt());
        });
      }
    },
    increaseHeight() {
      this.height += 1;
    }
  },
  computed: {
    myStyles(): object {
      return {
        height: `${this.height}px`,
        position: "relative"
      };
    },
    chartData(): any {
      return this.dataCollection;
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
