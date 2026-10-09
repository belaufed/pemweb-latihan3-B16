function tampilkanNama(nama: string | number) {
    if (typeof nama == "string") {
        console.log(nama.toUpperCase());
    } else {
        console.log(nama);
    } 
}

tampilkanNama("alya");
tampilkanNama(123);