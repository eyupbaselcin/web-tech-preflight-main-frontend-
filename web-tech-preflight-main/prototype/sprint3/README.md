Canlı: https://kampus-etkinlik.vercel.app

# Kampüs Etkinlik - Sprint 3

## Sayfalar

- `etkinlikler.html` - Ana sayfa: 6 etkinlik veriden üretilir, arama ve kategori filtresi
- `etkinlik-detay.html?id=event-3` - Adresteki id'ye göre etkinlik detayı, geçersiz id'de hata kutusu
- `etkinlik-ekle.html` - Doğrulamalı etkinlik ekleme formu
- `etkinlik-guncelle.html?id=event-3` - Aynı form, seçilen etkinlikle dolu gelir (menüde yok, detaydan gidilir)

## Kapsam

JavaScript ve DOM: `js/data.js` (6 etkinlik), `js/event-list.js` (kart üretimi, arama, filtre), `js/event-detail.js` (`?id=` ile detay), `js/event-form.js` (form doğrulama). `type="module"` kullanıldığı için sayfalar Live Server veya Vercel gibi bir sunucudan açılmalıdır.
