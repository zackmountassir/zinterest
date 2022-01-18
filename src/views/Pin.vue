<template>
  <div>
    <NavBar/>
    <Details/>
    <p class="suggestions_feed_title">Plus de contenus similaires</p>
    <Feed class="suggestions_feed"/>
  </div>
</template>
<script>
import NavBar from "@/components/PinDetails/NavBar";
import Details from "@/components/PinDetails/Details";
import Feed from "@/components/Feed/Feed";
export default {
name: 'Pin',
components : {
  NavBar,
  Details,
  Feed,
}
}
</script>