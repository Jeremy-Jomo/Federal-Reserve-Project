// src/components/WantedCard.jsx
import { Link } from "react-router-dom";
import "./WantedCard.css";

function toSentenceCase(str = "") {
  return str.toLowerCase().replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function WantedCard({ person }) {
  const { uid, title, images, subjects, field_offices, publication } = person;

  const imageUrl =
    person.images && person.images.length > 0 && person.images[0].original
      ? person.images[0].original
      : "https://bitslog.com/wp-content/uploads/2013/01/unknown-person1.gif";

  return (
    <div className="wanted-card">
      <img
        src={imageUrl}
        alt={title}
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop
          e.target.src =
            "https://bitslog.com/wp-content/uploads/2013/01/unknown-person1.gif";
        }}
      />

      <div className="card-content">
        <h2>{title}</h2>
        <p>
          <strong>Charges:</strong> {subjects?.join(", ") || "Unknown"}
        </p>
        {field_offices?.[0] && (
          <p>
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            {toSentenceCase(field_offices[0])}
          </p>
        )}
        <p>
          <strong>Published:</strong> {formatDate(publication)}
        </p>
        <Link to={`/details/${uid}`}>
          <button className="view-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default WantedCard;
