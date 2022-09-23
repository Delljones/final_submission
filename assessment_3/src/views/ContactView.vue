<template>
  <div class="contact">
<!--    Creating a contact form that users can leave their details  - Later down the track improved functionality -->
<!--    can be added where the information can be sent to a database or in form of an email -->
    <h1>Please Leave Your Details Below to Contact Us</h1><br>
    <div class="container">
      <form contact>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        <label for="subject">Your Message <br></label>
        <br>
        <textarea id="subject" name="subject" placeholder="Please write your message here"></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<!--Styling for a simple form -->
<style>
h1 {
  padding: 1cm;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  border-radius: 15px;
}

#subject {
  height: 200px;
  width: 900px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>