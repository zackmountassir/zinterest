<template>
  <div>

  <div class="notification_title">Mises à jour</div>
    <Notification class="notification" v-for="item in notifications" :key="item.id" :notification="item"/>
  </div>
</template>

<script>
import Notification from "@/components/NavBar/Notification";
export default {
  name : "NotificationsCenter",
  components : {
    Notification
  },
  data : function (){
    return {
      notifications : [
        {
          id : 1,
          avatar : "https://picsum.photos/50/50",
          title : "Living room, Sarah's bedroom et 10 autres tableaux choisis pour vous"
        },
        {
          id : 2,
          avatar : "avatar",
          title : "Essayez de rechercher plus d'idées pour trouver l'inspiration",
          suggestions : [
            {
              title:"hello world",
              image : "https://picsum.photos/300/200"
            },
            {
              title:"hello world",
              image : "https://picsum.photos/300/200"
            },
          ]
        },
        {
          id : 3,
          avatar : "avatar",
          title : "Voici 9 tableaux avec des idées qui devraient vous plaire",
          suggestions : [
            {
              title:"hello world",
              image : "https://picsum.photos/300/200"
            },
            {
              title:"hello world",
              image : "https://picsum.photos/300/200"
            },
          ]
        },
        {
          id : 4,
          avatar : "avatar",
          title : "My target , pin et 10 autres tableaux choisis pour vous",
          suggestions : [
            {
              title:"hello world",
              image : "https://picsum.photos/300/200"
            },
            {
              title:"hello world",
              image : "https://picsum.photos/300/200"
            },
            {
              title:"hello world",
              image : "https://picsum.photos/300/200"
            },
          ]
        }
      ]
    }
  }
}
</script>