import { events, formatDate } from "./data.js";

const container = document.querySelector("#detay");
const baslik = document.querySelector("#sayfa-baslik");

const id = new URLSearchParams(location.search).get("id");
const event = events.find((e) => e.id === id);

if (!event) {
  baslik.textContent = "Etkinlik bulunamadı";
  container.innerHTML = `<div class="hata-kutusu">
    <p></p>
    <a href="etkinlikler.html">← Listeye dön</a>
  </div>`;
  container.querySelector("p").textContent = id
    ? `"${id}" numaralı bir etkinlik yok. Listeden bir etkinlik seçin.`
    : "Adreste etkinlik numarası yok. Listeden bir etkinlik seçin.";
} else {
  const [gun, ay, yil] = event.date.split("-");
  document.title = event.title;
  baslik.textContent = event.title;
  container.innerHTML = `<article class="detay-karti">
    <figure>
      <img src="img/afis-${event.id}.svg" alt="${event.title} etkinlik afişi">
      <figcaption>Şekil: ${event.title} afişi</figcaption>
    </figure>
    <div class="kunye">
      <h2>Etkinlik Künyesi</h2>
      <dl>
        <dt>Tarih</dt>
        <dd><time datetime="${yil}-${ay}-${gun}T${event.time}">${formatDate(event.date)}, ${event.time}</time></dd>
        <dt>Yer</dt>
        <dd>${event.location}</dd>
        <dt>Kategori</dt>
        <dd>${event.category}</dd>
        <dt>Kontenjan</dt>
        <dd>${event.capacity} kişi</dd>
      </dl>
    </div>
    <div class="aciklama">
      <h2>Açıklama</h2>
      <p>${event.description}</p>
    </div>
    <div class="eylemler">
      <a href="etkinlikler.html">← Listeye dön</a>
      <a href="etkinlik-guncelle.html?id=${event.id}">Bu etkinliği güncelle</a>
    </div>
  </article>`;
}
