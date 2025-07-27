import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };

  useEffect(() => {
    fetch(`https://api.fbi.gov/wanted/v1/list`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.items.find((p) => p.uid === id);
        if (found) setPerson(found);
        else navigate("/");
      });
  }, [id, navigate]);

  if (!person) return <p>Loading...</p>;

  const cardStyle = {
    maxWidth: "600px",
    margin: "20px auto",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };
  const labelStyle = {
    fontWeight: "bold",
    color: "#1d4ed8",
  };

  const defaultImage =
    "https://bitslog.com/wp-content/uploads/2013/01/unknown-person1.gif";

  const imageUrl =
    person.images && person.images.length > 0 && person.images[0].original
      ? person.images[0].original
      : defaultImage;

  return (
    <div style={cardStyle}>
      <h2>{person.title}</h2>
      <img
        src={imageUrl}
        alt={person.title}
        style={{ width: "100%", borderRadius: "8px" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultImage;
        }}
      />
      <p>
        <span style={labelStyle}>Reward:</span>{" "}
        {person.reward_text || "None listed"}
      </p>
      <p>
        <span style={labelStyle}>Nationality:</span>{" "}
        {person.nationality || "Unknown"}
      </p>
      <p>
        <span style={labelStyle}>Details:</span>{" "}
        {stripHtml(person.details || person.description || "Unknown")}
      </p>
      <p>
        <span style={labelStyle}>Caution:</span>{" "}
        {stripHtml(person.caution || "Unknown")}
      </p>

      <p>
        <span style={labelStyle}>Date of Birth:</span>{" "}
        {person.dates_of_birth_used || "Unknown"}
      </p>
      <p>
        <span style={labelStyle}>Place of Birth:</span>{" "}
        {person.place_of_birth || "Unknown"}
      </p>
      <p>
        <span style={labelStyle}>Weight:</span>{" "}
        {person.weight || "Unknown"}
      </p>
      <p>
        <span style={labelStyle}>Eye Color:</span>{" "}
        {person.eyes || "Unknown"}
      </p>
      <p>
        <span style={labelStyle}>Hair Color:</span>{" "}
        {person.hair || "Unknown"}
      </p>
      <p>
        <span style={labelStyle}>Race:</span>{" "}
        {person.race || "Unknown"}
      </p>

      <p>
        <span style={labelStyle}>Scars & Marks:</span>{" "}
        {person.scars_and_marks || "Unknown"}
      </p>
      <p>
        <span style={labelStyle}>Sex:</span> {person.sex || "Unlisted"}
      </p>
      <p>
        <span style={labelStyle}>Date Published:</span>{" "}
        {new Date(person.publication).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          width:"70px"
        }}
      >
        ← Back
      </button>
    </div>
  );
}

export default Details;
