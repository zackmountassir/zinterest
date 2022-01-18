<template>
  <div class="">
    <div class="d-flex discussion_content align-items-center">
      <b-avatar src="https://placekitten.com/300/300" size="50px"></b-avatar>
      <div class="discussion_right align-items-center">
        <span class="user">{{ discussion.user }}</span>
        <p>{{discussion.lastMessage}}</p>
      </div>
    </div>
  </div>


</template>
<script>
export default {
  name : "Discussion",
  props : {
    discussion : Object,
  }
}
</script>