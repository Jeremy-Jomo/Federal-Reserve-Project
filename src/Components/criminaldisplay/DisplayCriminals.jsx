import "./Criminals.css";

function Criminals({ items }) {
  const fallBackImage =
    "https://media.istockphoto.com/id/1341046662/fr/vectoriel/ic%C3%B4ne-de-profil-dimage-signe-humain-ou-humain-et-symbole-pour-la-conception-de-mod%C3%A8les.jpg?s=612x612&w=0&k=20&c=p-0wYI-nvPA7NWtLrw1uUhhuYAUdy7xThXPpzsa2SFU=";
  const uniqueFieldOffices = [
    ...new Set(items.map((item) => item.field_offices)),
  ].filter((office) => office);

  return (
    <div>
      <div>
        <div className="filterer fade-in">
          <div>
            <div className="filtercontainer">
              <div>
                <input
                  type="search"
                  id="inputfield"
                  placeholder="Search by Name or Crime"
                />
              </div>
              <div>
                <select
                  name="field offices"
                  id="field-offices"
                >
                  <option value="">Select a field office</option>
                  {uniqueFieldOffices.map((office, index) => (
                    <option key={index} value={office}>
                      {office}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <p>
                Showing {items.length} of {items.length} cases
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fade-in">
        <h1>FEDERAL RECORDS</h1>
        <div className="card-container">
          {items.map((item, index) => (
              <div key={index} className="cards ">
                <h3>{item.title}</h3>
                <img
                  src={item.images?.[0]?.original || fallBackImage}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = fallBackImage;
                  }}
                />
                <p>
                  Charges : <strong>{item.subjects}</strong>
                </p>
                <p id="date">Published: {item.publication}</p>
                <div>
                  <button className="viewbtn">View Details</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default Criminals;

