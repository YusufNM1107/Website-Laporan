var selectedRow = null ;

// Menampilkan Alert

function showAlert(message , className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div , main);

    setTimeout(() => document.querySelector(".alert").remove(), 2000);
}


// Mengosongkan Form

function clearFields(){
    document.querySelector("#Nama").value = "";
    document.querySelector("#jabatan").value = "";
    document.querySelector("#Shift").value = "";
    document.querySelector("#Target_Penjualan").value = "";
    document.querySelector("#Target_Testimoni").value = "";
    document.querySelector("#Checklist_Online").checked = false;
    document.querySelector("#Waktu_Datang").checked = false;
    document.querySelector("#Bukti_Sop").checked = false;
    document.querySelector("#Bukti_Sesuai").checked = false;
    document.querySelector("#Lembur").checked = false;
    document.querySelector("#Minta_Testimoni").checked = false;
    document.querySelector("#Bukti_Testimoni").checked = false;
    document.querySelector("#Upload_Gform").checked = false;
}

// Menambahkan Data

document.querySelector("#laporan-form").addEventListener("submit" , (e) => {
    e.preventDefault();

    // Mendapatkan Value Form
    const Nama = document.querySelector("#Nama").value;
    const jabatan = document.querySelector("#jabatan").value;
    const shift = document.querySelector("#Shift").value;
    const targetPenjualan = document.querySelector("#Target_Penjualan").value;
    const perTargetPenjualan = document.querySelector("#per_Target_Penjualan").value;
    const targetTestimoni = document.querySelector("#Target_Testimoni").value;
    const perTargetTestimoni = document.querySelector("#per_Target_Testimoni").value;
    const checklistOnline = document.querySelector("#Checklist_Online").checked;
    const waktuDatang = document.querySelector("#Waktu_Datang").checked;
    const buktiSop = document.querySelector("#Bukti_Sop").checked;
    const buktiSesuai = document.querySelector("#Bukti_Sesuai").checked;
    const lembur = document.querySelector("#Lembur").checked;
    const mintaTestimoni = document.querySelector("#Minta_Testimoni").checked;
    const buktiTestimoni = document.querySelector("#Bukti_Testimoni").checked;
    const uploadGform = document.querySelector("#Upload_Gform").checked;

    // Validasi
    if(Nama == "" || jabatan == "" || shift == "" || targetPenjualan == "" || targetTestimoni == "" ){
        showAlert("Silahkan Isi Yang kurang" , "warning")
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#laporan-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${Nama}</td>
                <td>${jabatan}</td>
                <td>${shift}</td>
                <td>${targetPenjualan} / ${perTargetPenjualan}</td>
                <td>${targetTestimoni} / ${perTargetTestimoni}</td>
                <td>${checklistOnline ? '<i class="uil uil-check"></i>' : '<i class="uil uil-times"></i>'}</td>
                <td>${waktuDatang ? '<i class="uil uil-check"></i>' : '<i class="uil uil-times"></i>'}</td>
                <td>${buktiSop ? '<i class="uil uil-check"></i>' : '<i class="uil uil-times"></i>'}</td>
                <td>${buktiSesuai ? '<i class="uil uil-check"></i>' : '<i class="uil uil-times"></i>'}</td>
                <td>${lembur ? '<i class="uil uil-check"></i>' : '<i class="uil uil-times"></i>'}</td>
                <td>${mintaTestimoni ? '<i class="uil uil-check"></i>' : '<i class="uil uil-times"></i>'}</td>
                <td>${buktiTestimoni ? '<i class="uil uil-check"></i>' : '<i class="uil uil-times"></i>'}</td>
                <td>${uploadGform ? '<i class="uil uil-check"></i>' : '<i class="uil uil-times"></i>'}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td> 
                `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Berhasil Menambah Data" , "success")

            
        }
        else {
            selectedRow.children[0].textContent = Nama ;
            selectedRow.children[1].textContent = jabatan ;
            selectedRow.children[2].textContent = shift ;
            selectedRow.children[3].textContent = targetPenjualan ;
            selectedRow.children[4].textContent = targetTestimoni ;
            selectedRow.children[5].textContent = checklistOnline ;
            selectedRow.children[6].textContent = waktuDatang ;
            selectedRow.children[7].textContent = buktiSop ;
            selectedRow.children[8].textContent = buktiSesuai ;
            selectedRow.children[9].textContent = lembur ;
            selectedRow.children[10].textContent = mintaTestimoni ;
            selectedRow.children[11].textContent = buktiTestimoni ;
            selectedRow.children[12].textContent = uploadGform ;
            selectedRow = null;
            showAlert("Data Diubah" , "info")
        }
        clearFields()
    }

});

// Edit Data

document.querySelector("#laporan-form").addEventListener("click" , (e) => {
    let target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#Nama").value = selectedRow.children[0].textContent;
        document.querySelector("#jabatan").value = selectedRow.children[1].textContent;
        document.querySelector("#Shift").value = selectedRow.children[2].textContent;
        document.querySelector("#Target_Penjualan").value = selectedRow.children[3].textContent;
        document.querySelector("#Target_Testimoni").value = selectedRow.children[4].textContent;
        document.querySelector("#Checklist_Online").checked = selectedRow.children[5].querySelector('i').classList.contains('uil-check');
        document.querySelector("#Waktu_Datang").checked = selectedRow.children[6].querySelector('i').classList.contains('uil-check');
        document.querySelector("#Bukti_Sop").checked = selectedRow.children[7].querySelector('i').classList.contains('uil-check');
        document.querySelector("#Bukti_Sesuai").checked = selectedRow.children[8].querySelector('i').classList.contains('uil-check');
        document.querySelector("#Lembur").checked = selectedRow.children[9].querySelector('i').classList.contains('uil-check');
        document.querySelector("#Minta_Testimoni").checked = selectedRow.children[10].querySelector('i').classList.contains('uil-check');
        document.querySelector("#Bukti_Testimoni").checked = selectedRow.children[11].querySelector('i').classList.contains('uil-check');
        document.querySelector("#Upload_Gform").checked = selectedRow.children[12].querySelector('i').classList.contains('uil-check');
    }
})

// Hapus Data

document.querySelector("#laporan-list").addEventListener("click", (e) => {
    const target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Data Di Hapus" , "danger");
    }
});

// Definisi variabel untuk ikon
const iconCheck = '✓'; 
const iconCross = '✗'; 

// Fungsi Konversi Data Tabel ke Teks
function convertTableToText() {
    let now = new Date();
    let dayStr = now.toLocaleDateString('id-ID', { weekday: 'long' });
    let dateStr = now.toLocaleDateString('id-ID');
    let timeStr = now.toLocaleTimeString('id-ID');

    let rows = Array.from(document.querySelectorAll("#laporan-list tr"));
    rows.sort((a, b) => {
        const shiftA = a.children[2] ? a.children[2].textContent.trim() : "";
        const shiftB = b.children[2] ? b.children[2].textContent.trim() : "";
        const shifts = ['Pagi', 'Siang', 'Malam'];
        return shifts.indexOf(shiftA) - shifts.indexOf(shiftB);
    });

    let allDataText = `*REPORT HARIAN SOLO* \n_Update :${dayStr}, ${timeStr} WIB, ${dateStr}_\n\n`;
    let currentShift = "";

    rows.forEach(row => {
        const shift = row.children[2] ? row.children[2].textContent.trim() : "";
        if (shift !== currentShift) {
            if (currentShift !== "") {
                allDataText += "\n";
            }
            allDataText += `*${shift}*\n`;
            currentShift = shift;
        }
        const cells = row.querySelectorAll("td");
        if (cells.length >= 13) { // Pastikan ada cukup cells
            const dataText = `\n\n${cells[0].textContent} (${cells[1].textContent})
                            \nTarget Penjualan: ${cells[3].textContent}
                            \nTarget Testimoni: ${cells[4].textContent}
                            \nMengisi Checklist Online Harian ${cells[5].querySelector('i').classList.contains('uil-check') ? iconCheck : iconCross}
                            \nDatang Tepat Waktu ${cells[6].querySelector('i').classList.contains('uil-check') ? iconCheck : iconCross}
                            \nMeng-Upload Bukti SOP Kebersihan ${cells[7].querySelector('i').classList.contains('uil-check') ? iconCheck : iconCross}
                            \nBukti SOP Kebersihan Telah Sesuai (bukti yang di upload tidak menampilkan before/after) ${cells[8].querySelector('i').classList.contains('uil-check') ? iconCheck : iconCross}
                            \nLembur ${cells[9].querySelector('i').classList.contains('uil-check') ? iconCheck : iconCross}
                            \nMeminta Testimoni ${cells[10].querySelector('i').classList.contains('uil-check') ? iconCheck : iconCross}
                            \nBukti Testimoni yang di Upload sesuai ${cells[11].querySelector('i').classList.contains('uil-check') ? iconCheck : iconCross}
                            \nMeng-Upload Checklistan Harian ke Google Form ${cells[12].querySelector('i').classList.contains('uil-check') ? iconCheck : iconCross}\n\n`;
            allDataText += dataText;
        }
    });

    document.querySelector("#hasilKonversi").value = allDataText.trim();
}

// Event Listener untuk Tombol Konversi
document.querySelector("#tombolKonversi").addEventListener("click", convertTableToText);

function copyTextFromTextarea() {
    const textarea = document.querySelector("#hasilKonversi");
    textarea.select(); 
    document.execCommand("copy"); 

    
    showAlert("Teks berhasil disalin!", "success");
}

// Event Listener untuk Tombol Copy
document.querySelector("#tombolCopy").addEventListener("click", copyTextFromTextarea);

// Kirim Text Area Ke whatsApp

function kirimKeWhatsApp() {
    let isiPesan = document.getElementById('hasilKonversi').value;
    let encodedPesan = encodeURIComponent(isiPesan);
    let whatsappUrl = `https://wa.me/?text=${encodedPesan}`;

    window.open(whatsappUrl, '_blank');
}