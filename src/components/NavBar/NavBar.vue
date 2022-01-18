<template>
  <div>
    <div class="nav-bar">
      <b-row>
        <div class="nav-bar d-flex align-items-center justify-content-center">
          <b-col class="d-flex justify-content-center align-items-center">
            <div class="brand">
              <img src="../../assets/logo.png" />
            </div>
            <div>
              <button class="homeBtn">Accueil</button>
            </div>

          </b-col>
          <b-col cols="9">
            <SearchBar />
          </b-col>
          <b-col>
            <b-row class="align-items-center justify-content-center">
              <b-col>
                <div class="notification_icon">
                  <b-icon-bell-fill class="icon" @click="toggleNotificationCenter"></b-icon-bell-fill>
                </div>
              </b-col>
              <b-col>
                <div class="notification_icon">
                  <b-icon-chat-dots-fill class="icon" @click="toggleMessageCenter"></b-icon-chat-dots-fill>
                </div>
              </b-col>
              <b-col>
                <img src="https://picsum.photos/id/237/40/40" class="avatar"/>
              </b-col>
            </b-row>
          </b-col>
        </div>

      </b-row>
    </div>
    <NotificationsCenter v-if="showNotificationCenter" class="notification_center" />
    <MessageCenter v-if="showMessageCenter" class="notification_center" />

  </div>

</template>

<script>
import SearchBar from "@/components/NavBar/SearchBar";
import NotificationsCenter from "@/components/NavBar/NotificationsCenter";
import MessageCenter from "@/components/NavBar/MessageCenter";
export default {
  components :  {
    SearchBar,
    NotificationsCenter,
    MessageCenter,
  },
  name: 'NavBar',
  data: function () {
    return {
      showNotificationCenter: false,
      showMessageCenter: false,
    }
  },
  methods : {
    toggleNotificationCenter : function(){
      this.showNotificationCenter=(this.showNotificationCenter)?false:true;
      this.showMessageCenter=false;
    },
    toggleMessageCenter : function(){
      this.showMessageCenter=(this.showMessageCenter)?false:true;
      this.showNotificationCenter=false;

    }
  }
}
</script>