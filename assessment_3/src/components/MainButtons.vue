<template>
  <div class="main-buttons">
    <button class="main-button" @click="showModal">HEH Sound</button>
    <ModalPopup v-show="isModalVisible" @close="closeModal" />
    <button class="main-button">EH Sound</button>
    <button class="main-button">OWH Sound</button>
    <button class="main-button">NEH Sound</button>
    <button class="main-button">EARH Sound</button>
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
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>



</style>