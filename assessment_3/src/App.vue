<template>
  <!--Implementation of the router within the project to form the basis of -->
  <!--the function and then all content can sit under this   -->
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/Blog">Blog</router-link>
    <router-link to="/contact">Contact Us</router-link>
    <router-link to="/SignUp">Sign Up</router-link>
  </div>
<!--  Main area where the content is-->
  <div class="container">
    <router-view/>
  </div>
  <!--  // Implementation of the footer to sit as a static item at the bottom of the page-->
  <div class="footer">
    <footer-main/>
  </div>
</template>

<script>
// Importing the main footer as a component in the Application
import FooterMain from "@/components/FooterMain";

export default {
  components: {FooterMain}
}
</script>
//inline styling included
<style scoped>
/* Navigation */
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 50px;
  background: mintcream;
  color: white;
  display: flex;
  align-items: center;
  z-index: 2;
}
#nav a {
  display: block;
  margin-right: 25px;
  color: black;
  opacity: 0.7;
}

nav:active {

}
#nav a,
#nav a:hover {
  opacity: 500;
  font-size: 22pt;
}

a{
  text-decoration: none;
  font-weight: bold;
  font-size: 20pt;
}

</style>