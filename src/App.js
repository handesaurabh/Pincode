import React, { useState } from 'react';
import './App.css';

function App() {
  const [pincode, setPincode] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filterText, setFilterText] = useState('');

  // Filter data based on post office name as user types
  React.useEffect(() => {
    if (data.length > 0) {
      const filtered = data.filter(item => 
        item.Name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [filterText, data]);

  const handleLookup = async () => {
    // Validate pincode - must be exactly 6 digits
    if (!/^[0-9]{6}$/.test(pincode)) {
      setError('Please enter a valid 6-digit Indian pincode');
      setData([]);
      setFilteredData([]);
      setFilterText('');
      return;
    }

    setError('');
    setFilterText('');
    setLoading(true);
    
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const result = await response.json();
      
      if (result && result[0] && result[0].Status === 'Success') {
        setData(result[0].PostOffice || []);
        setFilteredData(result[0].PostOffice || []);
      } else {
        setError(result[0]?.Message || 'No data found for this pincode');
        setData([]);
        setFilteredData([]);
      }
    } catch (err) {
      setError('Error fetching data. Please try again.');
      setData([]);
      setFilteredData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLookup();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Indian Pincode Lookup</h1>
        <form onSubmit={handleSubmit} className="lookup-form">
          <div className="input-group">
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter 6-digit pincode"
              maxLength={6}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Lookup'}
            </button>
          </div>
          {error && <div className="error">{error}</div>}
        </form>

        {data.length > 0 && (
          <div className="filter-input">
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Filter by post office name"
            />
          </div>
        )}

        {loading && (
          <div className="loader">Loading...</div>
        )}

        {!loading && filteredData.length > 0 && (
          <div className="results">
            <h2>Results ({filteredData.length})</h2>
            <div className="results-grid">
              {filteredData.map((item, index) => (
                <div key={index} className="result-card">
                  <h3>{item.Name}</h3>
                  <p><strong>Pincode:</strong> {item.Pincode}</p>
                  <p><strong>District:</strong> {item.District}</p>
                  <p><strong>State:</strong> {item.State}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && filteredData.length === 0 && data.length > 0 && (
          <div className="no-results">Couldn't find the postal data you're looking for…</div>
        )}
      </div>
    </div>
  );
}

export default App;
