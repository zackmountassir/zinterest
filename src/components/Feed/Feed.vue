<template>
  <div class="feed">
    <div class="masonry-container">
      <FeedPin v-for="(pin,index) in pins" :key="index" v-bind:pin="pin"/>
    </div>
  </div>
</template>

<script>
import FeedPin from "@/components/Feed/FeedPin";
import pinsData from "@/data/pins.json";
export default {
  name : "Feed",
  components : {
    FeedPin,
  },
  data : function (){
    return {
      pins : pinsData,
    }
  }
}
</script>