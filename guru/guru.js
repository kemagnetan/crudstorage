 //----------------------------konfigurasi----------------------------------//

            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            var firebaseConfig = {
                apiKey: "AIzaSyAXTrIuXO4OGau7EliaUj6XE-7OS0FIN8Q",
                authDomain: "percobaan-3aa8e.firebaseapp.com",
                databaseURL: "https://percobaan-3aa8e-default-rtdb.firebaseio.com",
                projectId: "percobaan-3aa8e",
                storageBucket: "percobaan-3aa8e.appspot.com",
                messagingSenderId: "51589690048",
                appId: "1:51589690048:web:e63a8de81c95edc3d7f325",
                measurementId: "G-D8GZMGNJ69"
                };
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);




var on=1;
var off=0;

//--------------------------------------Kuis 1--------------------------------
    function on_kuis1(){
        on1.style.background="green";
        off1.style.background="#0a3546";
        firebase.database().ref('kontrol/1/').update(
            {kuis1:on});
    }
    function off_kuis1(){
        off1.style.background="red";
        on1.style.background="#0a3546";
        firebase.database().ref('kontrol/1/').update(
            {kuis1:off});
    }

//--------------------------------------Kuis 2 --------------------------------
    function on_kuis2(){
        on2.style.background="green";
        off2.style.background="#0a3546";
        firebase.database().ref('kontrol/1/').update(
            {kuis2:on});
    }
    function off_kuis2(){
        off2.style.background="red";
        on2.style.background="#0a3546";
        firebase.database().ref('kontrol/1/').update(
            {kuis2:off});
    }

    //--------------------------------------Kuis 3--------------------------------
    function on_kuis3(){
        on3.style.background="green";
        off3.style.background="#0a3546";
        firebase.database().ref('kontrol/1/').update(
            {kuis3:on});
    }
    function off_kuis3(){
        off3.style.background="red";
        on3.style.background="#0a3546";
        firebase.database().ref('kontrol/1/').update(
            {kuis3:off});
    }

//--------------------------------------evaluasi --------------------------------
    function on_kuis4(){
        on4.style.background="green";
        off4.style.background="#0a3546";
        firebase.database().ref('kontrol/1/').update(
            {evaluasi:on});
    }
    function off_kuis4(){
        off4.style.background="red";
        on4.style.background="#0a3546";
        firebase.database().ref('kontrol/1/').update(
            {evaluasi:off});
    }

  //--------------------------Ambil semua data KUIS          
  function dataKuis1(){
    firebase.database().ref('kontrol').once('value',
    function(AllRecords1){
        AllRecords1.forEach(
            function(CurrentRecord){
                var kuis1=CurrentRecord.val().kuis1;
                var kuis2=CurrentRecord.val().kuis2;
                var kuis3=CurrentRecord.val().kuis3;
                var evaluasi=CurrentRecord.val().evaluasi;

                KuisToTable1(kuis1,kuis2,kuis3,evaluasi);
            }
        );
    });
}
window.onload=dataKuis1;
//---------------------------------mengisi tabel-----------------------------
function KuisToTable1(kuis1,kuis2,kuis3,evaluasi){

    if (kuis1==1){
        on1.style.background="green";
    }else{
        off1.style.background="red";
    }

    if (kuis2==1){
        on2.style.background="green";
    }else{
        off2.style.background="red";
    }
    if (kuis3==1){
        on3.style.background="green";
    }else{
        off3.style.background="red";
    }
    if (evaluasi==1){
        on4.style.background="green";
    }else{
        off4.style.background="red";
    }

}


//----------------------------------batas-------------------------------
