<template>
  <div>

    <div class="notification_title">Boîte de réception</div>
    <p class="duscussions_subtitle">Partagez des idées avec vos amis</p>
    <Discussion class="discussion"
                v-for="(item,index) in discussions"
                :key="index"
                :discussion="item"/>
  </div>
</template>

<script>
import Discussion from "@/components/NavBar/Discussion";
export default {
  name : "MessageCenter",
  components : {
    Discussion
  },
  data : function (){
    return {
      discussions : [
        {
          avatar : "https://picsum.photos/50/50",
          user : "Ahmed Ahmed",
          lastMessage : "Hey there"
        },
        {
          avatar : "avatar",
          user : "Ahmed Ahmed",
          lastMessage : "Hey there"
        },
        {
          avatar : "avatar",
          user : "Ahmed Ahmed",
          lastMessage : "Hey there"
        },
        {
          avatar : "avatar",
          user : "Ahmed Ahmed",
          lastMessage : "Hey there"
        }
      ]
    }
  }
}
</script>