<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">This is what your baby is saying!</div>
        <footer class="modal-footer">
          <div class="modal-h2">Description goes here - Needs to have a props cast
            to it
          </div>
          <slot name="footer">
            <button type="button" class="modal-popup" @click="close">Click to Close!</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalPopup",

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

.modal-header {
  justify-content: center;
  font-weight: bold;
  font-size: 26pt;
}

.modal-h2 {
  font-size: 16pt;
}

.modal-footer {
  display: table;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #eeeeee;
  text-align: center;
  font-weight: bold;
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
  height: 10cm;
  margin: 10% 24% 30px;
  background: mintcream;
  box-shadow: 20px 20px 30px 10px;
}

.modal-popup {
  border: 1pt solid black;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  margin-top: 2cm;


}

</style>