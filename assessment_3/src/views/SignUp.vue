
<template>
  <div id="form">
  <h1> Signup to Receive our Updates</h1>
<!--    <h1> Message is: {{ message }}</h1>-->
  <div>
    <label for="">Name: </label>
    <input type="text"  v-model="formname">
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
      <input type="checkbox" value="First Option" v-model="checkedValues">
      <label for=""> I would like to be sent promotional emails  </label>
      <input type="checkbox" value="Second Option" v-model="checkedValues">
      <label for="" > Please DO NOT send me promotional emails  </label>
      <br>
      <br>
      <H3>Your Response was: </H3>

      {{checkedValues}}

    </div>

  </div>

</template>