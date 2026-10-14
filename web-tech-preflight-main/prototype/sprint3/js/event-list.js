import { events, parseDate, formatDate } from "./data.js";

const list = document.querySelector("#etkinlik-listesi");

function createCard(event) {
  return `<article class="kart">
    <h3>${event.title}</h3>
    <span class="rozet">${event.category}</span>
    <p>Tarih: ${formatDate(event.date)}, ${event.time}</p>
    <p>Yer: ${event.location}</p>
    <p>Kontenjan: ${event.capacity} kişi</p>
    <p>${event.description}</p>
    <a href="etkinlik-detay.html?id=${event.id}">Detayları gör →</a>
  </article>`;
}

function render(dizi) {
  list.innerHTML = dizi.map(createCard).join("");
}

if (list.dataset.limit) {
  const yaklasan = [...events]
    .sort((a, b) => parseDate(a.date) - parseDate(b.date))
    .slice(0, Number(list.dataset.limit));
  render(yaklasan);
} else {
  const form = document.querySelector("#filtre-formu");
  const arama = document.querySelector("#arama");
  const kategori = document.querySelector("#kategori-filtre");
  const sonucSatiri = document.querySelector("#sonuc");

  const kategoriler = [...new Set(events.map((e) => e.category))];
  kategori.innerHTML += kategoriler
    .map((k) => `<option value="${k}">${k}</option>`)
    .join("");

  function filtrele() {
    const aranan = arama.value.trim().toLocaleLowerCase("tr-TR");
    const secilen = kategori.value;

    const sonuc = events.filter((e) => {
      const metin = `${e.title} ${e.category} ${e.location} ${e.description}`
        .toLocaleLowerCase("tr-TR");
      const metinUyuyor = metin.includes(aranan);
      const kategoriUyuyor = secilen === "" || e.category === secilen;
      return metinUyuyor && kategoriUyuyor;
    });

    render(sonuc);
    sonucSatiri.textContent =
      sonuc.length === 0
        ? "Aramanıza uygun etkinlik bulunamadı."
        : `${sonuc.length} etkinlik listeleniyor.`;
  }

  form.addEventListener("submit", (e) => e.preventDefault());
  arama.addEventListener("input", filtrele);
  kategori.addEventListener("change", filtrele);
  filtrele();
}
