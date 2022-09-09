
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
  </div>

</template>