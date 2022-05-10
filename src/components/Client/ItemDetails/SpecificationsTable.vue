<template>
  <div class="spec-row" id="summarySpecs">
    <h2 v-if="header">{{ header }}</h2>
    <table width="100%">
      <tbody>
      <tr v-for="(item_value, item_name, index) in filtered_data" :key="item_name"
          :class="{odd: calculate_stripe(index)}">
        <td class="label-spec"> {{ capitalizeFirstLetter(item_name).replaceAll('_', ' ') }} <span class="coln">:</span>
        </td>
        <td class="value-spec"> {{ item_value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<!--suppress JSUnfilteredForInLoop -->
<script>
import {capitalizeFirstLetter} from "@/services/utils";

export default {
  props: ['header', 'data', 'ignore'],
  name: 'SpecificationsTable',
  methods: {
    capitalizeFirstLetter: capitalizeFirstLetter,
    calculate_stripe: function (index) {
      if (index < 2) return false;

      return (index - (Math.floor(index / 4) * 4) === 2) || ((index) - (Math.floor((index) / 4) * 4) === 3);
    }
  },
  computed: {
    filtered_data: function () {
      let result = {};
      for (let key in this.data) {
        if (this.ignore.indexOf(key) !== -1) {
          continue
        }
        result[key] = this.data[key];
      }
      return result;
    }
  }
}
</script>