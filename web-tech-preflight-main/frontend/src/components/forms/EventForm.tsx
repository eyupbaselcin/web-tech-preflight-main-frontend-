import { CATEGORIES } from "../../types/campus-event";

interface EventFormProps {
  onSubmit: () => void;
}

function EventForm({ onSubmit }: EventFormProps) {
  return (
    <>
      <p className="yardim">
        Yıldızlı (*) alanlar zorunludur. Bu sprintte form veri kaydetmez;
        sadece görünümdür.
      </p>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="alan">
          <label htmlFor="title">
            Etkinlik adı <span className="zorunlu">*</span>
          </label>
          <input
            id="title"
            type="text"
            maxLength={80}
            placeholder="Örn. Kariyer Günleri"
          />
        </div>
        <div className="alan">
          <label htmlFor="category">
            Kategori <span className="zorunlu">*</span>
          </label>
          <select id="category" defaultValue="">
            <option value="">Seçiniz</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="alan">
          <label htmlFor="date">
            Tarih <span className="zorunlu">*</span>
          </label>
          <input id="date" type="date" />
        </div>
        <div className="alan">
          <label htmlFor="time">
            Saat <span className="zorunlu">*</span>
          </label>
          <input id="time" type="time" />
        </div>
        <div className="alan">
          <label htmlFor="location">
            Yer <span className="zorunlu">*</span>
          </label>
          <input
            id="location"
            type="text"
            placeholder="Örn. A Blok Konferans Salonu"
          />
        </div>
        <div className="alan">
          <label htmlFor="capacity">Kontenjan (isteğe bağlı)</label>
          <input id="capacity" type="number" min={1} max={1000} />
        </div>
        <div className="alan">
          <label htmlFor="description">Açıklama</label>
          <textarea id="description" rows={5} />
        </div>
        <button type="submit">Kaydet</button>
      </form>
    </>
  );
}

export default EventForm;
