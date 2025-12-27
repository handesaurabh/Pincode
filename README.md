# Indian Pincode Lookup App

A React-based application that allows users to search for Indian postal codes and view detailed information about post offices.

## Features

- **Pincode Lookup**: Enter a 6-digit Indian pincode to retrieve associated post office details
- **Real-time Filtering**: Filter results by post office name as you type
- **Detailed Information**: Displays post office name, pincode, district, and state
- **Validation**: Ensures input is exactly 6 digits before making API calls
- **Error Handling**: Shows appropriate messages for invalid inputs or API errors
- **Loading State**: Visual indicator while fetching data from the API
- **Responsive Design**: Works on both desktop and mobile devices

## API Used

The application uses the Indian Postal Pincode API:
- Endpoint: `https://api.postalpincode.in/pincode/<PINCODE>`
- Method: GET
- Returns: Post office details including name, pincode, district, and state

## Requirements

- Node.js (v12 or higher)
- npm or yarn package manager

## Installation

1. Clone or download this repository
2. Navigate to the project directory in your terminal
3. Install dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your browser and go to `http://localhost:3000`
3. Enter a 6-digit Indian pincode in the input field
4. Click "Lookup" to retrieve post office details
5. Use the filter field to search for specific post offices by name

## Functionality

- **Input Validation**: The app validates that the input is exactly 6 digits before making an API call
- **API Integration**: Fetches data from the Indian Postal Pincode API when the lookup button is clicked
- **Filtering**: Real-time filtering of results by post office name
- **Error Handling**: Displays appropriate error messages for invalid inputs or API errors
- **Loading State**: Shows a loading indicator while data is being fetched
- **No Results**: Shows a message when filtered results return no matches

## Technologies Used

- React.js
- React Hooks (useState, useEffect)
- JavaScript ES6+
- CSS3
- REST API Integration

## Project Structure

```
src/
├── App.js          # Main application component
├── App.css         # Styling for the application
├── index.js        # Entry point for the React app
└── other files...  # Standard React boilerplate files
```

## Components

- **Form**: Input field for pincode and lookup button
- **Filter Input**: Dynamic filtering by post office name
- **Results Display**: Grid layout showing post office details
- **Loader**: Visual indicator during API calls
- **Error Messages**: Validation and API error handling

## Customization

You can customize the styling by modifying the `App.css` file to match your preferred design.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request