<template>
  <div id="form">
    <div class="input">
      <h1> Signup For More!</h1>
      <h2> Signup now and receive the
        <br>latest information straight to
        <br>your inbox! </h2>
      <label for=""></label>
      <input type="text" placeholder="Name" v-model="formname">
      <label for=""></label>
      <input type="email" placeholder="Email" v-model="email">
      <label for=""></label>
      <input type="text" placeholder="Password" v-model="password">

      <div id="terms">
        <h3> I consent to the terms and conditions </h3>
        <input type="checkbox" value="Yes" v-model.trim="checkedValues">
        <label for=""></label>
        <H3>Your Response was: </H3>
        {{ checkedValues }}
      </div>

      <input type="submit" value="Submit">
    </div>

    <div id="rendering">
      <div>
<!--        evidence of Vmodel to bind data -->

        <h3>{{ optionMessage }}</h3>
        <select v-model="selected">
          <option disabled> Please select an option</option>
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Word of Mouth">Word of Mouth</option>
        </select>
        <br>
        <div>
          <br>
          Thanks {{ selected }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
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
<style>
@import './viewStyling/signup.css';
</style>
