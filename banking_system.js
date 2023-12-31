class Human {
    constructor(nama, alamat, kode_pin) {
        this.nama = nama;
        this.alamat = alamat;
        this.kode_pin = kode_pin;
    }

    introduce() {
        console.log(`Hi, ${this.nama} dari ${this.alamat}`)
    }

    #kodePin = () => {
        console.log(`Kode PIN anda adalah ${this.kode_pin}`)
    }
    mintaPin() {
        console.log(this.#kodePin());
    }
    static #isHidingArea = true;
}

class rekeningBank extends Human{                                                                           //Class bankAccount
    constructor(nama, alamat, kode_pin, noRekening, saldo) {
        super(nama, alamat, kode_pin)
        this.noRekening = noRekening;
        this.saldo = saldo;
    }
    introduce() {
        super.introduce();
        console.log(`No. Rekening anda adalah ${this.noRekening} dengan saldo awal Rp${this.saldo}`)
    }
    setor(jumlah) {                                                                                         //Metode deposit(amount)
        this.saldo += jumlah;
        setTimeout(() => {console.log(`Saldo yang anda setorkan berjumlah Rp${jumlah}`)}, 500);
    }
    ditarik(jumlah) {                                                                                       //Metode withdraw(amount)
        if (jumlah <= this.saldo) {
            this.saldo -= jumlah;
            setTimeout(() => {console.log(`Saldo yang anda tarik berjumlah Rp${jumlah}`)}, 500);
        } else {
            setTimeout(() => {console.log(`Saldo yang ingin anda tarik berjumlah Rp${jumlah}`)}, 500);
            setTimeout(() => {console.log('Maaf saldo anda tidak mencukupi')}, 500);
        }
    }
    displaySaldo() {
        setTimeout(() => {console.log(`Jumlah saldo rekening anda adalah Rp${this.saldo}`)}, 500);
    }
}

let rekening = new rekeningBank('Ilham', 'Bandung', '123456', 'SB-123', 100000);
rekening.introduce();
rekening.setor(150000);
rekening.ditarik(200000);
rekening.displaySaldo();
rekening.ditarik(60000);
rekening.displaySaldo();