<template>
  <div>
    <NavBar class="nav-bar" />
    <Feed />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar/NavBar";
import Feed from "@/components/Feed/Feed";
export default {
  name: 'Home',
  components: {
    NavBar,
    Feed
  }
}
</script>