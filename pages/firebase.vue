<template>
    <div>

    </div>
</template>

<script>
    export default {
        head() {
            return {
      //     script: [{ src: 'https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js'}],
      //     script: [{ src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}],
            link: [
            {
                  rel: 'stylesheet',
                 href:
                    'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
      script: [
        {
          src:
            'https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js',
            'https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js',
            'https://www.gstatic.com/firebasejs/6.0.4/firebase-database.js'.
        },
      ],
      var firebaseConfig = {
    apiKey: "AIzaSyDfYUvwQ13xMce0U3s_hQwAl90HC4OTpRI",
    authDomain: "ordering-8400c.firebaseapp.com",
    projectId: "ordering-8400c",
    storageBucket: "ordering-8400c.appspot.com",
    messagingSenderId: "1082358645001",
    appId: "1:1082358645001:web:0a665c86222179971113d8",
    measurementId: "G-7HF1P9SD6R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.initializeApp(firebaseConfig):
    }
}

//     <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyDfYUvwQ13xMce0U3s_hQwAl90HC4OTpRI",
//     authDomain: "ordering-8400c.firebaseapp.com",
//     projectId: "ordering-8400c",
//     storageBucket: "ordering-8400c.appspot.com",
//     messagingSenderId: "1082358645001",
//     appId: "1:1082358645001:web:0a665c86222179971113d8",
//     measurementId: "G-7HF1P9SD6R"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
</script>

<style lang="scss" scoped>

</style>