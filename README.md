# 🚂 TrainMate

**Find Your Travel Companions on Indian Railways**

TrainMate is a web application that helps travelers across India connect with fellow passengers on the same train journey. Make your train journey more enjoyable by finding peers going to the same destination, sharing meals, or simply making new friends along the way.

![TrainMate](logo.svg)

## ✨ Features

- **🔍 Find Travel Companions**: Search for peers traveling on the same train route by train number, date, origin, or destination station
- **📝 Register Your Journey**: Add your travel details so others can find and connect with you
- **📱 Contact Integration**: Easily contact found peers directly via phone
- **🎨 Modern UI**: Beautiful, responsive design built with Tailwind CSS
- **📱 Mobile Friendly**: Works seamlessly on desktop, tablet, and mobile devices
- **💾 Local Storage**: Data persists in your browser using localStorage

## 🚀 Getting Started

### Prerequisites

No build process or dependencies required! TrainMate runs entirely in the browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! Start finding travel companions

```bash
# Or use a local server (optional)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📖 How to Use

### Finding Travel Companions

1. Scroll to the **"Find Travel Companions"** section
2. Fill in any combination of:
   - Train Number
   - Journey Date
   - Origin Station
   - Destination Station
3. Click **"Search for Peers"**
4. Browse through the results and contact peers via the contact button

### Registering Your Journey

1. Scroll to the **"Register Your Journey"** section
2. Fill in the required fields:
   - Your Name
   - Contact Number
   - Train Number
   - Journey Date
   - Origin Station
   - Destination Station
3. Optionally add:
   - Coach & Seat Number
   - Additional Notes
4. Click **"Register Journey"**
5. Others can now find you when searching for peers!

## 🛠️ Technology Stack

- **HTML5**: Structure and semantic markup
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JavaScript (Vanilla)**: No frameworks - pure JavaScript for interactivity
- **LocalStorage API**: Browser-based data storage

## 📁 Project Structure

```
trainmate/
├── index.html      # Main HTML file
├── script.js       # JavaScript functionality
├── logo.svg        # TrainMate logo
└── README.md       # This file
```

## 🎨 Design Features

- **Blue Color Theme**: Modern blue gradient color scheme
- **Responsive Design**: Adapts to all screen sizes
- **Smooth Animations**: Subtle transitions and hover effects
- **Card-based Layout**: Clean, organized information display
- **Accessible**: Semantic HTML and proper form labels

## 📝 Notes

- Currently uses **localStorage** for data storage, which means data persists only in your browser
- For production use, consider integrating with a backend database
- Sample data is included for demonstration purposes
- All user data is stored locally in the browser

## 🔒 Privacy & Security

- All data is stored locally in your browser
- Contact information is only visible to users who search for your specific journey
- No data is transmitted to external servers
- Users can contact each other directly via phone

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available for personal and commercial use.

## 🎯 Future Enhancements

Potential features for future versions:
- Backend integration with database
- User authentication and profiles
- Real-time notifications
- Chat/messaging system
- Integration with IRCTC API
- Reviews and ratings system
- Journey history

## 💬 Support

For questions or issues, please open an issue on the repository or contact the development team.

---

**Made with ❤️ for travelers across India**

© 2024 TrainMate. All rights reserved.

