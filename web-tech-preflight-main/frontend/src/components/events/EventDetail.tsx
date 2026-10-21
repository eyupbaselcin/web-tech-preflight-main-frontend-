import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
  return (
    <article className={event.image ? "detay-karti" : "detay-karti afissiz"}>
      {event.image && (
        <figure className="event-poster">
          <img src={event.image} alt={`${event.title} etkinlik afişi`} />
        </figure>
      )}
      <div className="kunye">
        <h2>Etkinlik Künyesi</h2>
        <dl>
          <dt>Tarih</dt>
          <dd>
            <time dateTime={`${event.date}T${event.time}`}>
              {formatDate(event.date)}, {event.time}
            </time>
          </dd>
          <dt>Yer</dt>
          <dd>{event.location}</dd>
          <dt>Kategori</dt>
          <dd>{event.category}</dd>
          <dt>Kontenjan</dt>
          <dd>{event.capacity} kişi</dd>
        </dl>
      </div>
      <div className="aciklama">
        <h2>Açıklama</h2>
        <p>{event.description}</p>
      </div>
      <div className="eylemler">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          ← Listeye dön
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onEdit(event.id);
          }}
        >
          Bu etkinliği güncelle
        </a>
      </div>
    </article>
  );
}

export default EventDetail;
