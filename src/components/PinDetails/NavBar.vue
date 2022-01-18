<template>
  <div class="singlePinav">
    <div>
      <router-link to="/">
        <b-icon-arrow-left-circle-fill class="icon"></b-icon-arrow-left-circle-fill>
      </router-link>
      <b-icon-share-fill class="icon"></b-icon-share-fill>
      <b-icon-three-dots-vertical class="icon"></b-icon-three-dots-vertical>
    </div>
    <div>
      <button class="standard_btn m-2">En savoir plus</button>
      <button class="save_btn  standard_btn">Enregistrer</button>
    </div>
  </div>
</template>
<script>
export default {
  name : "NavBar"
}
</script>