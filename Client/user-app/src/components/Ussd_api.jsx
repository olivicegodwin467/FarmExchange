import { useState, useEffect } from 'react';
import Axios from 'axios';

function Ussd_api() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with actual developer API key
  const apiKey = 'DEVELOPER_API_KEY';

  const fetchData = () => {
    Axios.get('http://localhost:5000/protected-data', {
      headers: {
        'x-api-key': apiKey, // Include the API key in the header
      },
    })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="api-container">
      <h1 className="title">API Data</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {data.length > 0 && (
        <ul className="data-list">
          {data.map((item) => (
            <li key={item.id} className="data-item">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Profession:</strong> {item.profession}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Ussd_api;
