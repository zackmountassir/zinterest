<template>
  <div class="">
    <div class="d-flex notification_content">
      <b-avatar  src="https://placekitten.com/300/300" rounded size="50px"/>
      <span class="title">{{ notification.title }}</span>
    </div>
    <div  class="notification_suggestions" v-bind:style="{ columnCount:   notification.suggestions.length  }">
      <b-col class="notification_suugestion"
           v-for="(suggestion,index) in notification.suggestions"
           :key="index"
           v-bind:style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(' + suggestion.image + ')' }"
      >
      <span class="suggestion_title">{{suggestion.title}}</span>
      </b-col>
    </div>
  </div>


</template>
<script>
export default {
  name : "Notification",
  props : {
    notification : Object,
  }
}
</script>