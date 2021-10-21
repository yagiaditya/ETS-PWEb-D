$("#validation").validate({
    rules: {
        productPrice: {
            required: true,
            min: 5000
        }
    },
    messages: {
        productPrice: {
            required: "Harga harus di isi!!!",
            min: "masukkan harga minimal Rp. 5000"
        }
    }
});