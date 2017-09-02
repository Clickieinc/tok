
 // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyCUXyz84jD6vyIn0n7nHETZukY7xQL7KoE",
    authDomain: "tok-landing-page.firebaseapp.com",
    databaseURL: "https://tok-landing-page.firebaseio.com/",
    storageBucket: "tok-landing-page.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();


  
  function submitForm() {
	  
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var zip = document.getElementById("zip").value
  
  // TODO - Sanitize inputs - remove .com from emails
  // Validate user input

  database.ref(email).set({
    username: name,
    user_email: email,
    zip_code: zip
  });
}