Canlı: https://kampus-etkinlik.vercel.app

# Kampüs Etkinlikleri - Sprint 4

Sprint 3'teki 5 sayfalık site Vite + React + TypeScript ile yeniden yazıldı: veri tipli, filtre fonksiyonları saf, 5 sayfa tek `App.tsx` içinde, sayfa geçişi `useState` ile.

## Komutlar

- `npm run dev` - geliştirme sunucusu (http://localhost:5173)
- `npm run build` - üretim derlemesi (`tsc -b && vite build`)
- `npm run preview` - derlenmiş hâli açar

## Dosyalar

- `package.json` - proje adı, komutlar (`dev`, `build`), paket listesi.
- `package-lock.json` - yüklenen paketlerin tam sürümlerini kilitler.
- `node_modules/` - indirilen paketler, GitHub'a gitmez.
- `tsconfig*.json` - TypeScript ayarları (`strict` açık).
- `vite.config.ts` - Vite ayarları ve React eklentisi.
- `index.html` - tek HTML dosyası, içinde boş `div#root` var.
- `src/main.tsx` - React'i başlatır, `App`'i `root`'a çizer.
- `src/App.tsx` - uygulamanın ana bileşeni; 5 sayfa, menü, arama ve filtre burada.
- `src/App.css` - responsive etkinlik kartları, detay, filtre ve form stilleri.
- `src/index.css` - uygulamanın genel tema değişkenleri ve temel stilleri.
- `src/types/campus-event.ts` - `CampusEvent` ve `Category` tipleri.
- `src/data/events.ts` - tipli 6 etkinlik verisi.
- `src/utils/filter-events.ts` - arama, kategori filtresi ve id ile bulma saf fonksiyonları.
- `public/` - olduğu gibi kopyalanan dosyalar (etkinlik afişleri).
