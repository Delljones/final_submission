<template>
  <div class="main-buttons">
    <button  class="main-button"  @click="showModal"> HEH Sound</button>
    <ModalPopup v-show="isModalVisible" message = "This is a HEH Sound" @close="closeModal"  />

    <button class="main-button" @click="showModal">NEH Sound</button>
    <ModalPopup  v-show="isModalVisible" @close="closeModal" message = "Neh message"> </ModalPopup>

    <button class="main-button" @click="showModal">EH Sound</button>
    <ModalPopup  v-show="isModalVisible" @close="closeModal" />

    <button class="main-button" @click="showModal">OWH Sound</button>
    <ModalPopup v-show="isModalVisible" @close="closeModal" />

    <button class="main-button" @click="showModal">EAIRGH Sound</button>
    <ModalPopup v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>

import ModalPopup from "@/components/SoundPopup";
export default {
  name: "MainButtons",
  components: {
  ModalPopup,
  },
  data() {
    return {
      text: "",
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  }
};
</script>
<style scoped>
</style>