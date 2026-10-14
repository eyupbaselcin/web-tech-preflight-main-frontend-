import { events } from "./data.js";

const form = document.querySelector("#etkinlik-formu");
const mesaj = document.querySelector("#form-mesaj");
const guncelleme = form.dataset.mode === "guncelle";

const id = new URLSearchParams(location.search).get("id");
const mevcut = events.find((e) => e.id === id);

const alanlar = ["ad", "kategori", "tarih", "saat", "yer", "kontenjan"];

const tarihiCevir = (tarih) => (tarih ? tarih.split("-").reverse().join("-") : "");

function doldur(etkinlik) {
  form.elements.ad.value = etkinlik.title;
  form.elements.kategori.value = etkinlik.category;
  form.elements.tarih.value = tarihiCevir(etkinlik.date);
  form.elements.saat.value = etkinlik.time;
  form.elements.yer.value = etkinlik.location;
  form.elements.kontenjan.value = etkinlik.capacity;
  form.elements.aciklama.value = etkinlik.description;
}

function denetle(data) {
  const errors = {};
  if (data.title.length < 3) errors.ad = "En az 3 karakter olmalı.";
  if (!data.category) errors.kategori = "Bir kategori seçin.";
  if (!data.date) errors.tarih = "Tarih seçin.";
  if (!data.time) errors.saat = "Saat seçin.";
  if (!data.location) errors.yer = "Yer boş bırakılamaz.";
  if (
    data.capacity !== null &&
    (!Number.isInteger(data.capacity) || data.capacity < 1 || data.capacity > 1000)
  ) {
    errors.kontenjan = "1 ile 1000 arasında bir sayı girin.";
  }
  return errors;
}

function hatalariGoster(errors) {
  alanlar.forEach((ad) => {
    const alan = form.elements[ad];
    const hata = document.querySelector(`#${ad}-hata`);
    if (errors[ad]) {
      hata.textContent = errors[ad];
      alan.setAttribute("aria-invalid", "true");
    } else {
      hata.textContent = "";
      alan.removeAttribute("aria-invalid");
    }
  });
}

function gonder(e) {
  e.preventDefault();
  const fd = new FormData(form);
  const kontenjanMetni = fd.get("kontenjan").trim();

  const data = {
    id: guncelleme ? mevcut.id : `event-${events.length + 1}`,
    title: fd.get("ad").trim(),
    category: fd.get("kategori"),
    date: tarihiCevir(fd.get("tarih")),
    time: fd.get("saat"),
    location: fd.get("yer").trim(),
    description: fd.get("aciklama").trim(),
    capacity: kontenjanMetni === "" ? null : Number(kontenjanMetni),
  };

  const errors = denetle(data);
  hatalariGoster(errors);

  if (Object.keys(errors).length > 0) {
    mesaj.className = "hata-kutusu";
    mesaj.textContent = "Formda hatalı alanlar var.";
    return;
  }

  mesaj.className = "basari-kutusu";
  mesaj.innerHTML = `<p>${guncelleme ? "Etkinlik güncellendi" : "Etkinlik oluşturuldu"} (bu sprintte kaydedilmedi):</p><pre></pre>`;
  mesaj.querySelector("pre").textContent = JSON.stringify(data, null, 2);
}

if (guncelleme && !mevcut) {
  form.outerHTML = `<div class="hata-kutusu">
    <p>Güncellenecek etkinlik açılamadı. Önce Etkinlikler sayfasından bir etkinlik seçin; detay sayfasındaki "Bu etkinliği güncelle" butonunu kullanın.</p>
    <a href="etkinlikler.html">Etkinliklere git</a>
  </div>`;
} else {
  if (guncelleme) doldur(mevcut);
  form.addEventListener("submit", gonder);
}
