CREATE DATABASE basic_banking_system;

CREATE TABLE nasabah (
    id_nasabah BIGSERIAL PRIMARY KEY,
    nama_nasabah VARCHAR(100) NOT NULL,
    telp_nasabah VARCHAR(20) NOT NULL,
    email_nasabah VARCHAR(100) NOT NULL,
    alamat_nasabah VARCHAR(255) NOT NULL
);

CREATE TABLE akun (
    id_akun BIGSERIAL PRIMARY KEY,
    no_akun VARCHAR(20) NOT NULL,
    saldo_akun DEC(15,2) NOT NULL DEFAULT 0,
    pin_akun INT NOT NULL,
    id_nasabah INT NOT NULL,
    CONSTRAINT FK_NasAkun FOREIGN KEY (id_nasabah) REFERENCES nasabah(id_nasabah)
);

CREATE TABLE transaksi (
    id_transaksi BIGSERIAL PRIMARY KEY,
    jenis_transaksi VARCHAR(20) NOT NULL,
    nilai_transaksi DEC(15,2),
    waktu_transaksi DATE NOT NULL,
    id_akun INT,
    CONSTRAINT FK_AkunTrans FOREIGN KEY (id_akun) REFERENCES akun(id_akun)
);

INSERT INTO nasabah (nama_nasabah, telp_nasabah, email_nasabah, alamat_nasabah)
VALUES
('Ilham', '082240228321', 'milhamnash@mail.com', 'Garut'),
('Firdaus', '085223424695', 'firdaus123@mail.com', 'Bandung'),
('Alya', '081323178522', 'alya789@maail.com', 'Cimahi');

INSERT INTO akun (no_akun, saldo_akun, pin_akun, id_nasabah)
VALUES
('0025 1234 5678 987', 2000000, '241696', 1),
('0025 1234 5678 321', 1500000, '705646', 2),
('0025 1234 5678 654', 3500000, '140299', 3);

INSERT INTO transaksi (jenis_transaksi, nilai_transaksi, waktu_transaksi, id_akun)
VALUES
('Penarikan', 500000, '2023-09-27', 3),
('Penyetoran', 250000, '2023-09-29', 2),
('Penarikan', 300000, '2023-10-02', 1),
('Penyetoran', 200000, '2023-10-10', 3);

SELECT * FROM nasabah;
SELECT * FROM akun;
SELECT * FROM transaksi;

UPDATE akun SET saldo_akun = 2500000 WHERE id_nasabah = 2;
SELECT * FROM akun;

SELECT nama_nasabah, alamat_nasabah FROM nasabah;

SELECT * FROM transaksi ORDER BY id_akun ASC;

SELECT count(*) FROM transaksi;

DELETE FROM transaksi WHERE nilai_transaksi = 200000;
SELECT * FROM transaksi;

SELECT nasabah.id_nasabah, nasabah.nama_nasabah, telp_nasabah, akun.no_akun, akun.pin_akun 
FROM nasabah JOIN akun ON nasabah.id_nasabah = akun.id_nasabah;