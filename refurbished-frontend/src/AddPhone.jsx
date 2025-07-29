

// import React, { useState } from 'react';
// import axios from 'axios';

// function AddPhone({ onPhoneAdded }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     condition: 'New',  // default to valid choice
//     cost_price: '',
//     selling_price: '',
//     stock: '',
//     sold_b2b: false,
//     sold_direct: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newPhone = {
//       ...formData,
//       cost_price: parseFloat(formData.cost_price),
//       selling_price: parseFloat(formData.selling_price),
//       stock: parseInt(formData.stock),
//     };

//     axios.post('http://127.0.0.1:8000/api/phones/', newPhone)
//       .then(res => {
//         alert("Phone added successfully ✅");
//         setFormData({
//           name: '',
//           condition: 'New',
//           cost_price: '',
//           selling_price: '',
//           stock: '',
//           sold_b2b: false,
//           sold_direct: false
//         });
//         if (onPhoneAdded) onPhoneAdded();
//       })
//       .catch(err => {
//         console.error("Error:", err.response?.data || err.message);
//         alert("Failed to add phone ❌");
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>➕ Add Refurbished Phone</h2>
//       <input type="text" name="name" placeholder="Phone Name" value={formData.name} onChange={handleChange} required /><br />

//       <select name="condition" value={formData.condition} onChange={handleChange} required>
//         <option value="New">New</option>
//         <option value="Good">Good</option>
//         <option value="Scrap">Scrap</option>
//       </select><br />

//       <input type="number" name="cost_price" placeholder="Cost Price" value={formData.cost_price} onChange={handleChange} required /><br />
//       <input type="number" name="selling_price" placeholder="Selling Price" value={formData.selling_price} onChange={handleChange} required /><br />
//       <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required /><br />

//       <label>
//         <input type="checkbox" name="sold_b2b" checked={formData.sold_b2b} onChange={handleChange} />
//         Sold to B2B
//       </label><br />

//       <label>
//         <input type="checkbox" name="sold_direct" checked={formData.sold_direct} onChange={handleChange} />
//         Sold Directly
//       </label><br />

//       <button type="submit">Add Phone</button>
//     </form>
//   );
// }

// export default AddPhone;







import React, { useState } from 'react';
import axios from 'axios';
import './AddPhone.css'; // Optional for additional styling

function AddPhone({ onPhoneAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    condition: 'New',
    cost_price: '',
    selling_price: '',
    stock: '',
    sold_b2b: false,
    sold_direct: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPhone = {
      ...formData,
      cost_price: parseFloat(formData.cost_price),
      selling_price: parseFloat(formData.selling_price),
      stock: parseInt(formData.stock),
    };

    axios.post('http://127.0.0.1:8000/api/phones/', newPhone)
      .then(() => {
        alert("Phone added successfully ✅");
        setFormData({
          name: '',
          condition: 'New',
          cost_price: '',
          selling_price: '',
          stock: '',
          sold_b2b: false,
          sold_direct: false
        });
        if (onPhoneAdded) onPhoneAdded();
      })
      .catch(err => {
        console.error("Error:", err.response?.data || err.message);
        alert("Failed to add phone ❌");
      });
  };

return (
  <div className="container my-4 d-flex justify-content-center">
    <div className="card shadow-lg border-0" style={{ maxWidth: '500px', width: '100%' }}>
      <div className="card-body">
        <h2 className="card-title mb-4 text-center">➕ Add Refurbished Phone</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" name="name" placeholder="Phone Name" value={formData.name} onChange={handleChange} className="form-control" required />
          </div>

          <div className="mb-3">
            <select name="condition" value={formData.condition} onChange={handleChange} className="form-select" required>
              <option value="New">New</option>
              <option value="Good">Good</option>
              <option value="Scrap">Scrap</option>
            </select>
          </div>

          <div className="mb-3">
            <input type="number" name="cost_price" placeholder="Cost Price" value={formData.cost_price} onChange={handleChange} className="form-control" required />
          </div>

          <div className="mb-3">
            <input type="number" name="selling_price" placeholder="Selling Price" value={formData.selling_price} onChange={handleChange} className="form-control" required />
          </div>

          <div className="mb-3">
            <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} className="form-control" required />
          </div>

          <div className="form-check mb-2">
            <input type="checkbox" name="sold_b2b" checked={formData.sold_b2b} onChange={handleChange} className="form-check-input" />
            <label className="form-check-label">Sold to B2B</label>
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" name="sold_direct" checked={formData.sold_direct} onChange={handleChange} className="form-check-input" />
            <label className="form-check-label">Sold Directly</label>
          </div>

          <button type="submit" className="btn btn-dark w-100">Add Phone</button>
        </form>
      </div>
    </div>
  </div>
);
}

export default AddPhone;
