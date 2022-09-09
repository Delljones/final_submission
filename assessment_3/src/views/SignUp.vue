<script>

export default {
  data() {
    return {
      message: "This is lab 6!",
      name: "",
      password: "",
      email: "",
      checkedValues: [],
      optionMessage: "How did you hear about us? ",
      selected: "",
    }
  }
}

</script>


<template>
  <div id="form">
    <h1> Signup to Receive our Updates</h1>
    <div>
      <label for="">Name: </label>
      <input type="text" v-model="formname">
      <br/>
      <br/>
      <label for="">Password: </label>
      <input type="text" v-model="password">
      <br/>
      <br/>
      <label for="">Email: </label>
      <input type="email" v-model="email">
    </div>
    <br>
    <br>
    <div>
      <H3> I would like to be sent promotioinal emails </H3>
      <input type="checkbox" value="Yes" v-model="checkedValues">
      <label for=""> Yes </label>
      <input type="checkbox" value="No" v-model="checkedValues">
      <label for=""> No </label>
      <br>
      <br>
      <H3>Your Response was: </H3>
      {{ checkedValues }}
      <br>
      <br>
    </div>

    <div id="rendering">
      <div>
        <h3>{{ optionMessage}}</h3>
        <select v-model="selected">
          <option disabled> Please select an option</option>
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Word of Mouth">Word of Mouth</option>
        </select>
        <br>
        <div>
          <br>
          You selected: {{ selected }}
        </div>
      </div>
    </div>
  </div>
</template>
