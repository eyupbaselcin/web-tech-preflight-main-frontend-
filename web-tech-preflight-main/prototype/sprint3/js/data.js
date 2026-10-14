export const events = [
  {
    id: "event-1",
    title: "Kariyer Günleri 2026",
    category: "Seminer",
    date: "12-10-2026",
    time: "14:00",
    location: "A Blok Konferans Salonu",
    description: "Mezunlarla kariyer söyleşileri ve şirket standları.",
    capacity: 120,
  },
  {
    id: "event-2",
    title: "Robotik Atölyesi",
    category: "Atölye",
    date: "20-10-2026",
    time: "10:00",
    location: "Lab 2",
    description: "Temel robot kolu montajı ve programlama uygulaması.",
    capacity: 40,
  },
  {
    id: "event-3",
    title: "Siber Güvenlik",
    category: "Söyleşi",
    date: "27-10-2026",
    time: "15:00",
    location: "B Blok Konferans Salonu",
    description: "Güncel saldırı türleri ve korunma yöntemleri üzerine söyleşi.",
    capacity: 80,
  },
  {
    id: "event-4",
    title: "Yapay Zekâya Giriş",
    category: "Seminer",
    date: "03-11-2026",
    time: "13:30",
    location: "A Blok Amfi",
    description: "Yapay zekânın temel kavramları ve uygulama alanları.",
    capacity: 150,
  },
  {
    id: "event-5",
    title: "Web Tasarım Atölyesi",
    category: "Atölye",
    date: "10-11-2026",
    time: "10:00",
    location: "Bilgisayar Lab 1",
    description: "HTML ve CSS ile ilk web sayfanı baştan sona hazırla.",
    capacity: 30,
  },
  {
    id: "event-6",
    title: "Girişimcilik Deneyimleri",
    category: "Söyleşi",
    date: "17-11-2026",
    time: "16:00",
    location: "B Blok Salon",
    description: "Genç girişimcilerle kuruluş hikâyeleri ve öneriler.",
    capacity: 100,
  },
];

export function parseDate(text) {
  const [gun, ay, yil] = text.split("-").map(Number);
  return new Date(yil, ay - 1, gun);
}

export function formatDate(text) {
  return parseDate(text).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
