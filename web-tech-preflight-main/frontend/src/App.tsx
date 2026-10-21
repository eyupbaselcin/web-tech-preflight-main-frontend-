import { useEffect, useState } from "react";
import "./App.css";
import { events } from "./data/events";
import type { Category } from "./types/campus-event";
import type { PageName } from "./types/page";
import { filterByCategory, findEventById, searchEvents } from "./utils/filter-events";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
  }

  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
  const categories = [...new Set(events.map((e) => e.category))];
  const filtered = filterByCategory(searchEvents(events, searchText), category);
  const selected = selectedId !== null ? findEventById(events, selectedId) : undefined;

  const headings: Record<PageName, string> = {
    home: "Kampüs Etkinlikleri",
    events: "Tüm Etkinlikler",
    detail: selected ? selected.title : "Etkinlik bulunamadı",
    add: "Etkinlik Ekle",
    update: "Etkinlik Güncelle",
  };
  const title = page === "home" ? "Ana Sayfa" : headings[page];

  useEffect(() => {
    document.title = `Kampüs Etkinlikleri — ${title}`;
  }, [title]);

  return (
    <>
      <div className="site-header">
        <div className="header-content">
          <Header title={headings[page]} />
          <Navigation current={page} onNavigate={go} />
        </div>
      </div>

      <main className="page-shell">
        {page === "home" && (
          <>
            <section className="home-intro" aria-labelledby="home-title">
              <div>
                <p className="eyebrow">KAMPÜSTE NELER OLUYOR?</p>
                <h2 id="home-title">Fikirler burada buluşuyor.</h2>
                <p>Seminer, atölye ve söyleşileri keşfet; kampüs hayatına sen de katıl.</p>
              </div>
              <button className="btn-primary" onClick={() => go("events")}>
                Etkinlikleri keşfet <span aria-hidden="true">→</span>
              </button>
            </section>
            <div className="section-heading">
              <div>
                <p className="eyebrow">TAKVİMİNE EKLE</p>
                <h2>Yaklaşan etkinlikler</h2>
              </div>
              <span className="event-count">{upcoming.length} etkinlik</span>
            </div>
            <EventList events={upcoming} onShowDetail={(id) => go("detail", id)} />
          </>
        )}

        {page === "events" && (
          <>
            <div className="section-heading page-heading">
              <div>
                <p className="eyebrow">ETKİNLİK TAKVİMİ</p>
                <h2>Tüm etkinlikler</h2>
                <p>Kampüste sana uygun bir etkinlik bul.</p>
              </div>
              <span className="event-count">{events.length} etkinlik</span>
            </div>
            <EventFilter
              searchText={searchText}
              category={category}
              categories={categories}
              onSearchChange={setSearchText}
              onCategoryChange={setCategory}
            />
            {filtered.length > 0 && (
              <p className="result-count">{filtered.length} etkinlik listeleniyor.</p>
            )}
            <EventList
              events={filtered}
              onShowDetail={(id) => go("detail", id)}
              emptyText="Aramanıza uygun etkinlik bulunamadı."
            />
          </>
        )}

        {page === "detail" && !selected && (
          <div className="hata-kutusu">
            <p>İstenen etkinlik bulunamadı. Listeden bir etkinlik seçin.</p>
            <a href="#" onClick={(e) => { e.preventDefault(); go("events"); }}>
              ← Listeye dön
            </a>
          </div>
        )}

        {page === "detail" && selected && (
          <EventDetail
            event={selected}
            onBack={() => go("events")}
            onEdit={(id) => go("update", id)}
          />
        )}

        {(page === "add" || page === "update") && (
          <EventForm onSubmit={() => window.scrollTo(0, 0)} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
