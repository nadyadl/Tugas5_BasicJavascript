// script.js
document.getElementById('registrasi').style.display = 'block';

function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}

const pendaftar = [];

function submitForm() {
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const sangu = parseInt(document.getElementById('sangu').value);

    if (nama.length < 10 || umur < 25 || sangu < 100000 || sangu > 1000000) {
        alert('Data tidak valid. Periksa kembali input Anda.');
        return;
    }

    pendaftar.push({ nama, umur, sangu });

    const table = document.getElementById('pendaftar-table');
    const tbody = document.getElementById('pendaftar-body');
    const row = tbody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = nama;
    cell2.innerHTML = umur;
    cell3.innerHTML = sangu;

    document.getElementById('nama').value = '';
    document.getElementById('umur').value = '';
    document.getElementById('sangu').value = '';

    calculateResume();
}

function calculateResume() {
    const totalUmur = pendaftar.reduce((acc, cur) => acc + cur.umur, 0);
    const totalSangu = pendaftar.reduce((acc, cur) => acc + cur.sangu, 0);
    const rataRataUmur = totalUmur / pendaftar.length;
    const rataRataSangu = totalSangu / pendaftar.length;

    const resumeText = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRataSangu.toFixed(2)} dengan rata-rata umur ${rataRataUmur.toFixed(2)}`;
    document.getElementById('resume').textContent = resumeText;
}
