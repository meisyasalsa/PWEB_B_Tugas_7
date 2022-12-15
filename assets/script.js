$(document).ready(function() {
	$('#frm-mhs').validate({
        rules: {
            nrp : {
                digits: true,
                minlength:10,
                maxlength:10
            },
            nama : {
                maxlength: 50
            },
            umur : {
                digits: true,
                range: [0, 100]
            },
            email : {
                email: true
            },
            pass1 : {
                minlength: 8
            },
            pass2 : {
                equalTo: "#pass1"
            }
        },
        messages: {
            nrp : {
                digits: "NRP harus berupa angka",
                minlength: "NRP harus berjumlah 10 digit",
                maxlength: "NRP harus berjumlah 10 digit"
            },
            name : {
                maxlength: "Nama tidak boleh kurang dari 100 karakter"
            },
            tgl : {
                indonesianDate: "Format tanggal salah"
            },
            email : {
                email: "Format email salah"
            },
            pass1 : {
                minlength: "Password minimal 8 karakter"
            },
            pass2 : {
                equalTo: "Password tidak sama"
            }
        }
    });
});