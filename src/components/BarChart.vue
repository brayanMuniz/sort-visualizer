<script>
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
        },
        // Todo: this should be computed by totalBars / howLongEachBarShouldTake= duration
        animation: {
          duration: 1000
        },
        maintainAspectRatio: false
      })
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    chartData: function() {
      this.renderChart(this.chartData, this.options);
    }
  }
});
</script>
