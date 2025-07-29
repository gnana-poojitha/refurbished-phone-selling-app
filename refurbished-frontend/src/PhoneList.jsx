import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PhoneList.css'; // Optional custom CSS

function PhoneList(props) {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/phones/')
      .then(response => setPhones(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [props.refresh]);

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="display-5 fw-bold text-dark">📱 Refurbished Phones Inventory</h2>
        <p className="text-muted">Explore available stock and platform insights</p>
      </div>

      <div className="row">
        {phones.map(phone => (
          <div key={phone.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow phone-card h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold text-black">{phone.name}</h5>
                <p className="card-text"><strong>Condition:</strong> {phone.condition}</p>
                <p className="card-text"><strong>Stock:</strong> {phone.stock}</p>
                <p className="card-text"><strong>Cost Price:</strong> ₹{phone.cost_price}</p>
                <p className="card-text"><strong>Selling Price:</strong> ₹{phone.selling_price}</p>

                <p className="card-text">
                  <strong>Profitable Platforms:</strong><br />
                  {phone.profitable_platforms?.length > 0
                    ? phone.profitable_platforms.join(', ')
                    : 'None (High fees, no profit)'}
                </p>

                <p className="card-text">
                  <strong>Best Platform:</strong> {phone.best_platform || 'None'}
                </p>

                <div className="profits mb-2">
                  <strong>Profits:</strong>
                  <ul className="list-unstyled mb-0">
                    <li>X: ₹{phone.platform_profits.X.toFixed(2)}</li>
                    <li>Y: ₹{phone.platform_profits.Y.toFixed(2)}</li>
                    <li>Z: ₹{phone.platform_profits.Z.toFixed(2)}</li>
                  </ul>
                </div>

                <div className="mapping">
                  <strong>Condition Mapping:</strong>
                  <ul className="list-unstyled mb-0">
                    <li>X: {phone.condition_mapping.X}</li>
                    <li>Y: {phone.condition_mapping.Y}</li>
                    <li>Z: {phone.condition_mapping.Z}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneList;






