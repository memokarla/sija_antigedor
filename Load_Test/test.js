// yang perlu diperhatikan
// 1. import
// 2. jumlah interation (uji coba)
// 3. diarahkan ke mana

import http from 'k6/http';
import {sleep} from 'k6';

export const options = {    
    vus: 10, // 10 Virtual Users (VU) berjalan bersamaan
    iterations: 10 // Total request adalah 10 (dibagi ke semua VU)
};

export default function() {
    // url ditentukan
    // http.get("url");
    http.get("https://www.komdigi.go.id/")

    // berapa lama berhenti
    // jadi ketika interation yang pertama (1) berhenti dulu
    sleep(1); //satuannya detik
}