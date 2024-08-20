# AnalyticsDashboard

This project is a social media analytics dashboard that visualizes data through charts and graphs, allowing users to filter and interact with the data dynamically.

### Installation and Running Instructions

1. Clone this repository:
   ```
   git clone https://github.com/AsharsDomain/AnalyticsDashboard.git
   ```

2. Navigate to the project directory:
   ```
   cd AnalyticsDash
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm run dev
   ```

The application will run on `http://localhost:3000`.

### API Documentation

**GET /api/data**
- Description: Fetch mock analytics data.
- Response: 
  ```json
  {
    "products": 300,
    "categories": 12,
    "customers": 33,
    "alerts": 42
  }
  ```

**GET /api/data/:year**
- Description: Fetch analytics data based on the selected year.
- Parameters:
  - `year` (string): The year to fetch data for (e.g., 2023, 2024).
- Response: Year-specific data.

### Assumptions and Design Decisions

- The mock data represents aggregated social media metrics for a given year.
- Filters are limited to the years 2023 and 2024 for simplicity.
- Recharts.js is used for visualization to simplify chart creation and responsiveness.

  React + Vite
  
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh


### Deployed APP
The Dashboard is deployed and accessible at: https://analyticsdash.netlify.app/



