<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header"> This is what your baby is saying!</div>
        <footer class="modal-footer">
          <div class="modal-h2">I am Hungry!!</div>
          <slot name="footer">
            <button type="button" class="modal-popup" @click="close">
              Click to Close!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalPopup",
  data: () => ({
    author: "",
    name: ""
  }),
  methods: {
    close() {
      this.$emit("close");
    }
  }
};

</script>
<style scoped>

.modal-header {
  text-align: center;
  position: center;
  font-weight: bold;
  font-size: 16pt;

}

.modal-h2 {
 text-align: center;
  font-size: medium;
  margin: 0 auto ;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 20cm;
  height: 10cm;
  margin: 300px 200px auto;
  padding: 10%;
  background: mintcream;
  box-shadow: 2px 2px 20px 1px;
  display: table-column;
}

.modal-footer {
  padding: 50px;
  text-align: center;
  border-top: 1px solid #eeeeee;
  text-align: center;
  font-weight: bold;
  font-size: 40pt;
}

.modal-popup{
  border: 1pt solid black;
  font-size: 20px;
  cursor: pointer;
  margin: 10pt;
  font-weight: bold;
  text-align: center;
}

</style>