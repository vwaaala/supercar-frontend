<template>

  <div class="toolbar">
    <div class="sorter">
      <div class="view-mode"><span class="button button-active button-grid" title="Grid">&nbsp;</span><a
          class="button-list" href="#" title="List">&nbsp;</a></div>
    </div>
    <SortBy/>
    <ItemLimiter/>
  </div>
</template>

<script>

import ItemLimiter from "@/components/Client/Listing/ItemLimiter";
import SortBy from "@/components/Client/Listing/SortBy";

export default {
  name: "ListingTopToolbar",
  components: {SortBy, ItemLimiter}
}
</script>

