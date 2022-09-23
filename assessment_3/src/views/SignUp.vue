<template>
<!--  This is a signup form - this shows many different techniques from V Model props and rendering -->
  <div id="form">
    <div class="input">
      <h1> Signup For More!</h1><br>
      <h2> Signup now and receive the latest information straight to your inbox! </h2>
<!--      Example of passing props so it is individualised-->
      <h2> Hi {{formname}}!</h2>
        <label for=""></label>
        <input type="text" placeholder="Name" v-model="formname">
        <label for=""></label>
        <input type="email" placeholder="Email" v-model="email">
        <label for=""></label>
        <input type="text" placeholder="Password" v-model="password">
      <div id="terms">
        <h3> I consent to the terms and conditions for this site </h3>
         <input type="checkbox" value="Yes" v-model.trim="checkedValues">
         <label for=""></label>
        <H3>Your Response was:{{checkedValues}} </H3>
      </div>
       <input type="submit" value="Submit">
    </div>

    <!-- evidence of Vmodel to bind data - Option tags and then binded to the response  -->
    <div id="rendering">
      <div>
        <h3>{{ optionMessage }}</h3>
        <select v-model="selected">
          <option disabled> Please select an option</option>
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Word of Mouth">Word of Mouth</option>
         </select> <br>
       <div><br>
<!--         Shows the choice that was selected above -->
          Thanks {{ selected }}!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formname: "",
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
