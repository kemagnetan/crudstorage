//----------------------------konfigurasi----------------------------------

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

window.onload = function () {


}

function mencari() {

   
    kelasnya = document.getElementById('kelas');
    kuis = document.getElementById('kuis');
    let kelasfix = '';

    nilaikuis=kuis.value;
    
    if (kelasnya.value == "1") {
        kelasfix = "9A";
    } else if (kelasnya.value == "2") {
        kelasfix = "9B";
    } else if (kelasnya.value == "3") {
        kelasfix = "9C";
    } else if (kelasnya.value == "4") {
        kelasfix = "9D";
    } else if (kelasnya.value == "5") {
        kelasfix = "9E";
    } else if (kelasnya.value == "6") {
        kelasfix = "9F";
    } else if (kelasnya.value == "7") {
        kelasfix = "9G";
    }

    if (kelasfix != '') {
               
         //menampilkan jawaban siswa pretes  
        if (nilaikuis=="pretes") {

            var task = firebase.database().ref("pretes/");
            let tmp = document.querySelector('.disini');
            tmp.innerHTML = "";
    
                let jwbfixx = [];
        
                let jwb2 = [ "d", "d", "a", "b", "d", "d", "d", "d", "a", "d", "a", "d", "c", "a", "d", "a", "a", "a", "d", "b" ];
            
                let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
                for (let i = 0; i < jwb2.length; i++) {
                    hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
                }
                hhh += `</tr>`;
                tmp.innerHTML += hhh;
                jwbfixx = jwb2;
        
                task.orderByChild("nama").on("child_added", function (data) {
        
                    var taskvalue = data.val();
        
                    if (kelasfix == taskvalue.kelas) {
                        let mm = '';
                        mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
        
        
                        for (let i = 0; i < jwbfixx.length; i++) {
                            if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                                mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                            } else {
                                mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                            }
                        }
                        mm += `</tr>`;
                        tmp.innerHTML += mm;
                    }
        
                });
        
            } 
         //batas menampilkan jawaban siswa pretes 

        //menampilkan jawaban siswa evaluasi  
             if (nilaikuis=="evaluasi") {

                var task = firebase.database().ref("evaluasi/");
                let tmp = document.querySelector('.disini');
                tmp.innerHTML = "";
        
                    let jwbfixx = [];
            
                    let jwb2 = [ "d", "d", "a", "b", "d", "d", "d", "d", "a", "d", "a", "d", "c", "a", "d", "a", "a", "a", "d", "b" ];
                
                    let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
                    for (let i = 0; i < jwb2.length; i++) {
                        hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
                    }
                    hhh += `</tr>`;
                    tmp.innerHTML += hhh;
                    jwbfixx = jwb2;
            
                    task.orderByChild("nama").on("child_added", function (data) {
            
                        var taskvalue = data.val();
            
                        if (kelasfix == taskvalue.kelas) {
                            let mm = '';
                            mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
            
            
                            for (let i = 0; i < jwbfixx.length; i++) {
                                if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                                    mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                                } else {
                                    mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                                }
                            }
                            mm += `</tr>`;
                            tmp.innerHTML += mm;
                        }
            
                    });
            
                } 
             //batas menampilkan jawaban siswa pretes 
             
            //  
             //menampilkan jawaban siswa kuis 1  
             if (nilaikuis=="kuis1") {

                var task = firebase.database().ref("kuis1/");
                let tmp = document.querySelector('.disini');
                tmp.innerHTML = "";
        
                    let jwbfixx = [];
            
                    let jwb2 = [ "a", "b", "c", "a", "a", "b", "d", "a", "d", "d"];
                
                    let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
                    for (let i = 0; i < jwb2.length; i++) {
                        hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
                    }
                    hhh += `</tr>`;
                    tmp.innerHTML += hhh;
                    jwbfixx = jwb2;
            
                    task.orderByChild("nama").on("child_added", function (data) {
            
                        var taskvalue = data.val();
            
                        if (kelasfix == taskvalue.kelas) {
                            let mm = '';
                            mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
            
            
                            for (let i = 0; i < jwbfixx.length; i++) {
                                if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                                    mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                                } else {
                                    mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                                }
                            }
                            mm += `</tr>`;
                            tmp.innerHTML += mm;
                        }
            
                    });
            
                } 
             //batas menampilkan jawaban siswa kuis 1 
              //  
               //menampilkan jawaban siswa kuis 2  
             if (nilaikuis=="kuis2") {

                var task = firebase.database().ref("kuis2/");
                let tmp = document.querySelector('.disini');
                tmp.innerHTML = "";
        
                    let jwbfixx = [];
            
                    let jwb2 = [ "b", "d", "d", "a", "c", "b", "c", "c", "d", "d"];
                
                    let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
                    for (let i = 0; i < jwb2.length; i++) {
                        hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
                    }
                    hhh += `</tr>`;
                    tmp.innerHTML += hhh;
                    jwbfixx = jwb2;
            
                    task.orderByChild("nama").on("child_added", function (data) {
            
                        var taskvalue = data.val();
            
                        if (kelasfix == taskvalue.kelas) {
                            let mm = '';
                            mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
            
            
                            for (let i = 0; i < jwbfixx.length; i++) {
                                if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                                    mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                                } else {
                                    mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                                }
                            }
                            mm += `</tr>`;
                            tmp.innerHTML += mm;
                        }
            
                    });
            
                } 
             //batas menampilkan jawaban siswa kuis 2 
             //menampilkan jawaban siswa kuis 3  
             if (nilaikuis=="kuis3") {

                var task = firebase.database().ref("kuis3/");
                let tmp = document.querySelector('.disini');
                tmp.innerHTML = "";
        
                    let jwbfixx = [];
            
                    let jwb2 = [ "d", "c", "a", "c", "d", "d", "c", "c", "b", "b"];
                
                    let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
                    for (let i = 0; i < jwb2.length; i++) {
                        hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
                    }
                    hhh += `</tr>`;
                    tmp.innerHTML += hhh;
                    jwbfixx = jwb2;
            
                    task.orderByChild("nama").on("child_added", function (data) {
            
                        var taskvalue = data.val();
            
                        if (kelasfix == taskvalue.kelas) {
                            let mm = '';
                            mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
            
            
                            for (let i = 0; i < jwbfixx.length; i++) {
                                if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                                    mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                                } else {
                                    mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                                }
                            }
                            mm += `</tr>`;
                            tmp.innerHTML += mm;
                        }
            
                    });
            
                } 
             //batas menampilkan jawaban siswa kuis 3 
    
    }else {
        alert('Tentukan filter pencarian');
    }



}


window.onload = function () {
    kelas = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('nilaikuis');
    kelas.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}

//haups data

function deletetask(id) {
    var yakin = confirm("Apakah kamu yakin ingin menghapus data ini ?");
    if (yakin) {
        var task = firebase.database().ref(nilaikuis+'/' + id);
        task.remove();
        mencari();
        alert("Data Berhasil dihapus");
    } else {

    }
}


//download table
function exportTableToExcel(tabel, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tabel = document.getElementById(tabel);
    var tableHTML = tabel.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}