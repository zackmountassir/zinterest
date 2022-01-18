<template>
<div v-if="!isLoading">
  <div class="detail_box">
    <b-row >
      <div class="col-6 detail_left">
       <img :src="pin.image">
      </div>
      <div class="detail_right col-md-6">
        <div class="top">
          <div class="author">
            <b-avatar :src="pin.image" size="50px"></b-avatar>
            <div class="author_details">
              <span class="name">{{ pin.author }}</span>
              <span class="follwers">19.3K abonnées</span>
            </div>
          </div>
          <div >
            <button class="standard_btn">s'abonner</button>
          </div>
        </div>
        <p class="title">{{pin.title}}</p>
        <p class="description">
          Pour Noël, pourquoi ne pas mêler cadeaux et créativité, en réalisant les cadeaux de ses proches soi-même ? Tricot, étagère, céramique, tout le monde aura son cadeau DIY !
        </p>
      </div>
    </b-row>

  </div>
</div>
</template>
<script>
import pinsData from "@/data/pins.json";
export default {
  name : "Details",
  data : function (){
    return {
      isLoading:true,
      pin : null,
    }
  },
  created() {
    let id=this.$route.params.id;
    console.log(id);
    var result = pinsData.filter(function (obj) {
      return obj.id ==id;
    })[0];
    console.log("result");
    this.isLoading=false
    console.log(this.isLoading);
    console.log(result.image);
    this.pin=result;
    console.log(result);
  }
}
</script>