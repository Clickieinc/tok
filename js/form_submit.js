
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
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var zip = document.getElementById("zip").value;
  

  var encodedName = encodeAsFirebaseKey(name);
  
  var emailRegExp = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
  
  if (emailRegExp.test(email)) {
    var encodedEmail = encodeAsFirebaseKey(email);

	
	if (parseInt(zip) != NaN) {
		database.ref('users/' + encodedEmail).set({
		userName: encodedName,
		userEmail: email,
		zipCode: zip
	  });
	  
	  alert("Response recorded!");
	}
  }
}

function encodeAsFirebaseKey(string) {
	return string.replace(/\%/g, '%25')
		.replace(/\./g, '%2E')
		.replace(/\#/g, '%23')
		.replace(/\$/g, '%24')
		.replace(/\//g, '%2F')
		.replace(/\[/g, '%5B')
		.replace(/\]/g, '%5D');
};
