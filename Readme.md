
# Full Stack API Showcase

This application is designed to showcase the usage of APIs for retrieving financial data of publicly traded companies. It utilizes the [Express](https://expressjs.com/) framework for the backend and [Axios](https://github.com/axios/axios) for making HTTP requests to external APIs.

## Features

- **Search**: Allows users to search for companies by name or symbol.
- **Company Information**: Displays detailed information about a selected company, including market capitalization and historical stock prices.
- **Currency Formatting**: Formats large currency amounts to make them more readable.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pritesh299/Search_stock.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Search_stock
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node index.js
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter the name or symbol of a publicly traded company in the search box and hit enter.

4. View the company information displayed on the page.

## API Usage

This application utilizes the following APIs:

- **Financial Modeling Prep API**: Used for searching companies and retrieving company profiles and historical stock prices.
  - API Documentation: [https://financialmodelingprep.com/developer/docs/](https://financialmodelingprep.com/developer/docs/)
  - API Key: *Please obtain your own API key and replace `YOUR_API_KEY` in the code.*

## Developer Notes

- This project is for demonstration purposes only and utilizes a free API with limited access. Some data may be unavailable due to restrictions.
- For successful results, it's recommended to search for US-based publicly traded companies.

## License

This project is licensed under the [MIT License](LICENSE).


