<script lang="ts">
import Vue from "vue";
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default Vue.extend({
  name: "timeChart",
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: () => ({
        labels: [],
        datasets: []
      })
    },
    options: {
      type: Object,
      default: () => ({
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      })
    }
  }
});
</script>
