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


function readlah() {
    let kuisku = document.getElementById('SelectKuis');
    let tab1 = document.querySelector('.Isi1');
    let tab2 = document.querySelector('.Isi2');

    if (kuisku.value == "1") {

        if(tab1.className.indexOf("hilang") != -1){
            tab1.className = tab1.className.replace(" hilang", "");
            tab2.className += " hilang";
        }

    var task = firebase.database().ref("hasil1/");
    let tmp = document.getElementById('IsiKuis');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('SelectKelas');
    sekolah = document.getElementById('SelectSekolah');
    let kelasfix = '';
    let sekolahfix = '';

    if (kelasnya.value == "1") {
        kelasfix = "7F";
    } else if (kelasnya.value == "2") {
        kelasfix = "7G";
    }

    if (sekolah.value == "1") {
        sekolahfix = "SMPN 1 Gambut";
    } else if (sekolah.value == "2") {
        sekolahfix = "SMP Sukses";
    }
    console.log(sekolahfix);
    if ((sekolahfix != '') && (kelasfix != '')) {
        let jwbfixx = [];

        let jwb2 = ["a", "a", "c", "d", "d", "a", "c", "c", "c", "b"];
    
        let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb2;

        task.orderByChild("nama").on("child_added", function (data) {

            var taskvalue = data.val();

            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
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

    } else if (sekolahfix != '') {
        let jwbfixx = [];

        let jwb2 = ["a", "a", "c", "d", "d", "a", "c", "c", "c", "b"];
    
        let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb2;

        task.orderByChild("nama").on("child_added", function (data) {
            var taskvalue = data.val();

            let mm = '';
            mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
            // console.log(taskvalue.jawabannya[0]);


            for (let i = 0; i < jwbfixx.length; i++) {
                if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                    mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                } else {
                    mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                }
            }
            mm += `</tr>`;
            tmp.innerHTML += mm;
        });

    } else {
        alert('Tentukan filter pencarian');
    }
} 
    
    else if(kuisku.value == "2") {

        if(tab1.className.indexOf("hilang") != -1){
            tab1.className = tab1.className.replace(" hilang", "");
            tab2.className += " hilang";
        }

        var task = firebase.database().ref("hasil2/");
        let tmp = document.getElementById('IsiKuis');
        tmp.innerHTML = "";
        kelasnya = document.getElementById('SelectKelas');
        sekolah = document.getElementById('SelectSekolah');
        let kelasfix = '';
        let sekolahfix = '';
    
        if (kelasnya.value == "1") {
            kelasfix = "7F";
        } else if (kelasnya.value == "2") {
            kelasfix = "7G";
        }
    
        if (sekolah.value == "1") {
            sekolahfix = "SMPN 1 Gambut";
        } else if (sekolah.value == "2") {
            sekolahfix = "SMP Sukses";
        }

        if ((sekolahfix != '') && (kelasfix != '')) {
            let jwbfixx = [];
    
            let jwb2 = ["a", "d", "c", "d", "a", "c", "b", "c", "b", "a"];
        
            let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
            for (let i = 0; i < jwb2.length; i++) {
                hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
            }
            hhh += `</tr>`;
            tmp.innerHTML += hhh;
            jwbfixx = jwb2;
    
            task.orderByChild("nama").on("child_added", function (data) {
    
                var taskvalue = data.val();
    
                if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
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
    
        } else if (sekolahfix != '') {
            let jwbfixx = [];
    
            let jwb2 = ["a", "d", "c", "d", "a", "c", "b", "c", "b", "a"];
        
            let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
            for (let i = 0; i < jwb2.length; i++) {
                hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
            }
            hhh += `</tr>`;
            tmp.innerHTML += hhh;
            jwbfixx = jwb2;
    
            task.orderByChild("nama").on("child_added", function (data) {
                var taskvalue = data.val();
    
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabannya[0]);
    
    
                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            });
    
        } else {
            alert('Tentukan filter pencarian');
        }
    } 
    
    else if(kuisku.value == "3") {

        if(tab1.className.indexOf("hilang") != -1){
            tab1.className = tab1.className.replace(" hilang", "");
            tab2.className += " hilang";
        }

        var task = firebase.database().ref("hasil3/");
        let tmp = document.getElementById('IsiKuis');
        tmp.innerHTML = "";
        kelasnya = document.getElementById('SelectKelas');
        sekolah = document.getElementById('SelectSekolah');
        let kelasfix = '';
        let sekolahfix = '';
    
        if (kelasnya.value == "1") {
            kelasfix = "7F";
        } else if (kelasnya.value == "2") {
            kelasfix = "7G";
        }
    
        if (sekolah.value == "1") {
            sekolahfix = "SMPN 1 Gambut";
        } else if (sekolah.value == "2") {
            sekolahfix = "SMP Sukses";
        }

        if ((sekolahfix != '') && (kelasfix != '')) {
            let jwbfixx = [];
    
            let jwb2 = ["c", "a", "d", "a", "d", "a", "a", "b", "c", "c"];
        
            let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
            for (let i = 0; i < jwb2.length; i++) {
                hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
            }
            hhh += `</tr>`;
            tmp.innerHTML += hhh;
            jwbfixx = jwb2;
    
            task.orderByChild("nama").on("child_added", function (data) {
    
                var taskvalue = data.val();
    
                if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
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
    
        } else if (sekolahfix != '') {
            let jwbfixx = [];
    
            let jwb2 = ["c", "a", "d", "a", "d", "a", "a", "b", "c", "c"];
        
            let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
            for (let i = 0; i < jwb2.length; i++) {
                hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
            }
            hhh += `</tr>`;
            tmp.innerHTML += hhh;
            jwbfixx = jwb2;
    
            task.orderByChild("nama").on("child_added", function (data) {
                var taskvalue = data.val();
    
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabannya[0]);
    
    
                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            });
    
        } else {
            alert('Tentukan filter pencarian');
        }
    } 
    
    else if(kuisku.value == "4") {

        if(tab2.className.indexOf("hilang") != -1){
            tab2.className = tab2.className.replace(" hilang", "");
            tab1.className += " hilang";
        }

        var task = firebase.database().ref("hasilA/");
        let tmp = document.getElementById('IsiKuis2');
        tmp.innerHTML = "";
        kelasnya = document.getElementById('SelectKelas');
        sekolah = document.getElementById('SelectSekolah');
        let kelasfix = '';
        let sekolahfix = '';
    
        if (kelasnya.value == "1") {
            kelasfix = "7F";
        } else if (kelasnya.value == "2") {
            kelasfix = "7G";
        }
    
        if (sekolah.value == "1") {
            sekolahfix = "SMPN 1 Gambut";
        } else if (sekolah.value == "2") {
            sekolahfix = "SMP Sukses";
        }

        if ((sekolahfix != '') && (kelasfix != '')) {
            let jwbfixx = [];
    
            let jwb2 = ["a", "b", "b", "c", "a", "b", "c", "c", "b", "d", "b", "d", "a", "b", "d", "c", "a", "b", "d", "a"];
        
            let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
            for (let i = 0; i < jwb2.length; i++) {
                hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
            }
            hhh += `</tr>`;
            tmp.innerHTML += hhh;
            jwbfixx = jwb2;
    
            task.orderByChild("nama").on("child_added", function (data) {
    
                var taskvalue = data.val();
    
                if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
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
    
        } else if (sekolahfix != '') {
            let jwbfixx = [];
    
            let jwb2 = ["a", "b", "b", "c", "a", "b", "c", "c", "b", "d", "b", "d", "a", "b", "d", "c", "a", "b", "d", "a"];
        
            let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
            for (let i = 0; i < jwb2.length; i++) {
                hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
            }
            hhh += `</tr>`;
            tmp.innerHTML += hhh;
            jwbfixx = jwb2;
    
            task.orderByChild("nama").on("child_added", function (data) {
                var taskvalue = data.val();
    
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabannya[0]);
    
    
                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            });
    
        } else {
            alert('Tentukan filter pencarian');
        }
    } 

    else{
        alert('tentukan filter kuis!');
    }

}

window.onload = function () {
    kelasnya = document.getElementById('SelectKelas');
    sekolah = document.getElementById('SelectSekolah');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
}



// download data

let download = document.querySelector('.pilDownload');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
});