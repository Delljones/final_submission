<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/Blog">View our Blog</router-link>
    <router-link to="/contact">Contact Us</router-link>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
