class rekeningBank {    
    constructor(noRekening, saldo) {
        this.noRekening = noRekening;
        this.saldo = saldo;
        console.log(`A/c No.: ${noRekening}`);
        console.log(`Saldo awal: Rp${saldo}`);    
    }
    setor(jumlah) {
        this.saldo += jumlah;
        console.log(`Setor: Rp${jumlah}`);
    }
    ditarik(jumlah) {
        if (jumlah <= this.saldo) {
            this.saldo -= jumlah;
            console.log(`Ditarik: Rp${jumlah}`);
        } else {
            console.log(`Ingin ditarik: Rp${jumlah}`);
            console.log('Saldo tidak mencukupi');
        }
    }
    displaySaldo() {
        console.log(`Saldo Rekening: Rp${this.saldo}`);
    }
}

const rekening = new rekeningBank('SB-123', 100000);
rekening.setor(500000);
rekening.ditarik(250000);
rekening.displaySaldo();

//alamat, kode pin