import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider,GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAr3bx5nY0NOC162T8yltnRdnbE6sxB_sY",
    authDomain: "login-b1527.firebaseapp.com",
    projectId: "login-b1527",
    storageBucket: "login-b1527.appspot.com",
    messagingSenderId: "555926689408",
    appId: "1:555926689408:web:4369437e1dd29701c33865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics=getAnalytics(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const provider_f = new FacebookAuthProvider();
const provider_g=new GithubAuthProvider();
console.log(provider_f);

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "logged.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });



})
document.getElementById("facebook-login-btn").addEventListener("click", function() {
    //alert(5)
    signInWithPopup(auth, provider_f)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      alert("Welcome "+user.displayName);
      console.log(user);
      // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);

      });		  		  
  });

document.getElementById("github-login-btn").addEventListener("click", function(){
    signInWithPopup(auth, provider_g)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
  });

});

const loginBtn=document.getElementById("login-btn");
loginBtn.addEventListener("click",function(){
   window.location.href='abc.html';
})
