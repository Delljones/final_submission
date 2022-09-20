<template>
  <div class="main-buttons">

    <button  class="main-button"  @click="showModal(' HEH Sound')"> HEH Sound</button>
    <!--    <ModalPopup v-show="isModalVisible" @close="closeModal" popup="HEH Sound" />-->

    <button class="main-button" @click="showModal('NEH Sound')">NEH Sound</button>
    <!--    <ModalPopup v-show="isModalVisible" @close="closeModal" popup="NEH Sound"/>-->

    <button class="main-button" @click="showModal('EH Sound')">EH Sound</button>
    <!--    <ModalPopup  v-show="isModalVisible" @close="closeModal" popup="EH Sound"/>-->

    <button class="main-button" @click="showModal('OWH Sound')">OWH Sound</button>
    <!--    <ModalPopup v-show="isModalVisible" @close="closeModal" popup="OWH Sound"/>-->

    <button class="main-button" @click="showModal('EAIRGH Sound')">EAIRGH Sound</button>
    <ModalPopup v-show="isModalVisible" @close="closeModal" :popup="buttonText"/>
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
      isModalVisible: false,
      buttonText: ''
    };
  },
  methods: {
    showModal(value) {
      this.isModalVisible = true,
          this.buttonText = value
    },
    closeModal() {
      this.isModalVisible = false;
    },
  }
};
</script>
<style scoped>
</style>