let saldo = 0;
let array;
array = [];
let dt = new Date();
function tambahSaldo() {
    let tambah = window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:", );
    if(tambah == null) {
        return;
    } else if(isNaN(tambah) == true ) {
        alert("Masukkan nilai saldo dengan angka!!");
        saldo = parseInt(saldo);
    } else if(parseInt(tambah) == 0) {
        alert("Anda belum menambahkan saldo");
        saldo = parseInt(saldo);
    } else {
        array.push(`Menambahkan saldo senilai ${tambah} rupiah | ${dt.toLocaleDateString('en-GB')} |`);
        saldo = parseInt(saldo) + parseInt(tambah);
        document.getElementById("para").innerHTML = `Saldo anda telah ditambahkan ${tambah} rupiah.`;
    }      
}

function kurangiSaldo() {
    let kurang = window.prompt("Masukkan jumlah saldo yang ingin dikurangi:", "")    
    if(kurang == null) {
        return;
    } else if(isNaN(kurang) == true ) {
        alert("Masukkan nilai saldo dengan angka!!");
        saldo = parseInt(saldo);
    } else if(parseInt(kurang) == 0) {
        alert("Anda belum mengurangi saldo");
        saldo = parseInt(saldo); 
    } else if(parseInt(kurang) > parseInt(saldo)) {
        saldo = parseInt(saldo);
        document.getElementById("para").innerHTML = `Mohon maaf saldo anda tidak mencukupi.`;
    } else {
        array.push(`Mengurangi saldo senilai ${kurang} rupiah | ${dt.toLocaleDateString('en-GB')} |`);
        saldo = parseInt(saldo) - parseInt(kurang);
        document.getElementById("para").innerHTML = `Saldo anda telah dikurangi ${kurang} rupiah.`;
    }     
}

function cekSaldo() {
    saldo = parseInt(saldo);
    document.getElementById("para").innerHTML = `Saldo anda saat ini yaitu ${saldo} rupiah.`;
}

function riwayatTrans() {
    for(i = 0; i < array.length; i++) {
        document.getElementById("para2").innerHTML = array.join(' ' + "<br>");
    }
}