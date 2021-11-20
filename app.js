// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBqZreLCAyGVCYBkMKNXloBekAZoHdP6bs",
    authDomain: "storage-gambar.firebaseapp.com",
    projectId: "storage-gambar",
    storageBucket: "storage-gambar.appspot.com",
    messagingSenderId: "980968712480",
    appId: "1:980968712480:web:d3fc4fe6c3c10905570f45",
    measurementId: "G-F360LWR3DB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('images/' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('progress_bar');
        progressBar.value = progress;
    });

    storageRef.getDownloadURL().then(function(url){
        const image = document.getElementById('image');
        console.log(url);
        image.src = url
    });
});