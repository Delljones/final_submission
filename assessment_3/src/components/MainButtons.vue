<template>
<!--  This is a template to b multiple buttons that you are able to click and as a result you will be able to see what
  the different sounds would mean from the video. I found it import to incorporate a popup modal because I feel asif
  it incorporates the message a little clearer-->

  <div class="main-buttons">
    <button class="main-button"
            @click="showModal( 'This is the word for hunger  - Like the tongue is up the top of the roof of the mouth when the baby cries. ' +
            'This sound means that the baby is hungry - You should either breast or bottle feed the baby right away to sooth')">NEH</button>
    <button class="main-button"
            @click="showModal('This is the sound for sleepy - It is based on a yawn reflex. it is like the mouth is making an oval shape. ' +
             'This means that the baby is sleepy. Start looking to sooth the baby and put to sleep ' +
             'and put down to sleep')">OWH</button>
    <button  class="main-button"
             @click="showModal('is the sound for uncomfortable. You are listening for the H sound of the cry - Heeeeh or heeh heeh heeeh. ' +
             'The baby is in discomfort and most likely needs to be burped or held, change their diaper, or maybe they are too hot or too cold?' )">HEH</button>
    <button class="main-button"
            @click="showModal('This is the sound for lower discomfort. This is a longer sound almost like you are breathing into your stomach - Eaaaaaiiiirgh. ' +
             'More of an R sound. It means that there is lower gas and maybe extend their ' +
             'body - or get ready for an explosion!! ')">EAIRGH</button>
    <button class="main-button"
            @click="showModal('This is the sound for upper discomfort. You are listening for a quick eh eh eh sound. This means that there could be an air bubble at the top of the throat or chest,' +
             ' Burp straight away this should cure this ')">EH</button>
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