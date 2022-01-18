<template>
  <router-link :to="{ name: 'pin', params: { id : pin.id }}"  class="pin">

      <div class="pin_hover">
        <div class="d-flex align-items-center justify-content-between w-100 p-2">
          <div class="add_to_table">
            <span>Home...</span>
            <b-icon-caret-down-fill />
          </div>
          <button class="save_btn  standard_btn">Enregistrer</button>
        </div>
      </div>

      <img :src="pin.image" class="pin_img"/>
      <p class="caption">{{pin.title}}</p>
      <div class="author">
        <img src="https://picsum.photos/30/30"/>
        <span>{{ pin.author }}</span>
      </div>
    </router-link>
</template>
<script>
export default {
  props: {
    pin : Object
  },
  name  : "PinFeed",

}
</script>