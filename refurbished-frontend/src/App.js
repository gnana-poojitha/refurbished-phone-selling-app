

// import React, { useState } from 'react';
// import PhoneList from './PhoneList';
// import AddPhone from './AddPhone';

// function App() {
//   const [refresh, setRefresh] = useState(false);

//   const handlePhoneAdded = () => {
//     setRefresh(!refresh);
//   };

//   return (
//     <div className="App">
//       <h1>📦 Refurbished Phone Selling App</h1>
//       <AddPhone onPhoneAdded={handlePhoneAdded} />
//       <hr />
//       <PhoneList refresh={refresh} />
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <PhoneList />
//     </div>
//   );
// }
// export default App;




import React, { useState } from 'react';
import PhoneList from './PhoneList';
import AddPhone from './AddPhone';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handlePhoneAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1 className="text-center fw-bold mb-4 display-5">
  Refurbished Phone Selling App
</h1>

      {/* <h1>📦 Refurbished Phone Selling App</h1> */}
      <AddPhone onPhoneAdded={handlePhoneAdded} />
      <hr />
      <PhoneList refresh={refresh} />
    </div>
  );
}

export default App;
