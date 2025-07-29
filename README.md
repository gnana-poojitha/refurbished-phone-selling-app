# 📱 Refurbished Phone Selling App
A full-stack web application to manage and sell refurbished phones smartly across multiple platforms(X,Y,Z).
It helps maximize profits while avoiding unprofitable listings using platform-specific fee rules and dynamic condition mapping.

## 💡 Project Highlights
- Add phones with full details: name, condition, pricing, stock, and sale type.
- Automatically calculates platform-specific fees and profits.
- Shows **all profitable platforms** for each phone.
- Highlights the **best platform** based on maximum profit.
- Adapts condition descriptions per platform.
- Prevents listing phones with zero stock or already sold.
- Clean, responsive UI with Bootstrap cards, hover effects, and centralized styling.

## Tech Stack
🌐Frontend
- React.js
- Axios
- Bootstrap

🖥 Backend
- Django
- Django REST Framework (DRF)
- SQLite (for local testing)


## Smart Logic

### Fees by Platform

| Platform | Fee Calculation        |
|----------|------------------------|
| X        | 10% of selling price   |
| Y        | 8% of price + ₹2       |
| Z        | 12% of selling price   |

### Condition Mapping

| Original  | X       | Y             | Z       |
|-----------|---------|---------------|---------|
| New       | New     | 3 stars       | New     |
| Good      | Good    | 2 stars       | As New  |
| Scrap     | Scrap   | 1 star (Usable) | Good   |


## 🚀 How to Run Locally

### 📁 Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd refurbished-phone-selling-app

### Backend Setup (Django + DRF)
cd refurbished-backend
python -m venv venv
venv\Scripts\activate   # Use `source venv/bin/activate` if you're on Mac/Linux
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
By default, backend runs at: http://127.0.0.1:8000/

###Frontend Setup (React)
cd refurbished-frontend
npm install
npm start
Frontend runs at: http://localhost:3000/
