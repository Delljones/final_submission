<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">

        <footer class="modal-footer">
          <div class="modal-h2" > {{popup}}</div>
          <button type="button" class="modal-popup" @click="close">Click to Close!</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalPopup",
  props: {
    popup : String
  },
  components:{
  },

  data () {
    return{
    }
  },

  methods: {
    close() {
      this.$emit("close");
    },
  }
};

</script>

<style scoped>
.modal-h2 {
  font-size: 16pt;
  margin-top: 2cm;
  padding-left: 2cm;
  padding-right: 2cm;
}

.modal-footer {
  display: table;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #eeeeee;
  text-align: center;
  font-weight: bold;
  margin-bottom: 2cm;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: center;
  display: table-column;
  justify-content: center;
  align-content: center;
  width: 20cm;
  height: 12cm;
  margin: 10% 24% 30px;
  background: mintcream;
  box-shadow: 20px 20px 30px 10px;
}

.modal-popup {
  border: 1pt solid black;
  font-size: 30px;
  cursor: pointer;
  align-content: center;
  font-weight: bold;
  text-align: center;
  margin-top: 2cm;
}
</style>