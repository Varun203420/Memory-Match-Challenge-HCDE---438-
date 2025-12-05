# Memory Match Challenge  
Final Project – HCDE 438: Interactive Web Technologies  
Varun Hariharan

## Overview  
Memory Match Challenge is a browser-based card matching game built using React and Vite.  
Players attempt to match all card pairs in the shortest time and fewest moves.  
The app features dynamic card generation, difficulty levels, a running timer, Firebase data storage,  
and a results screen summarizing user performance.

This project demonstrates React component architecture, state management with hooks,  
UI responsiveness, accessibility considerations, and integration with a cloud backend.

---

## Features  
### Core Gameplay
- Flip-to-reveal card interaction  
- Randomized pair generation based on difficulty  
- Timer and move counter  
- Match detection, mismatch reset  
- Game completion summary  

### UI & Responsiveness
- Modern navy/orange theme  
- Centered and flexible layout  
- Accessible buttons with ARIA labels  
- Responsive layout across devices  

### Backend Integration (Firebase)
- Stores user performance (time, moves, difficulty)  
- Provides persistent historical results  
- Modular, secure Firebase configuration  

### External API Usage
This project integrates with **Firebase Firestore**, which serves as the required API call.  
User results are written to the database at the end of each game session.

---

## Technologies Used
- React (Vite)
- JavaScript (ES6+)
- CSS3 (custom UI theme)
- Firebase Firestore (API integration)
- Git & GitHub for version control

---

## Project Structure
```
src/
  components/
    Card.jsx
  pages/
    Home.jsx
    Game.jsx
    Results.jsx
  firebase.js
  App.css
  main.jsx
public/
  vite.svg
```

---

## Setup & Installation
### 1. Clone the repository
```
git clone https://github.com/Varun203420/Memory-Match-Challenge-HCDE---438.git
cd memory-match-challenge
```

### 2. Install dependencies
```
npm install
```

### 3. Start the development server
```
npm run dev
```

### 4. Build for production
```
npm run build
```

---

## Usage Guidelines
1. Choose a difficulty level (Easy, Medium, Hard)  
2. Flip cards to find matching pairs  
3. Track progress via time and move count  
4. Finish the game to view results and have them stored in Firebase  
5. Replay or return home via the results screen  

---

## AI Use Statement  
AI assistance (ChatGPT) was used for:
- Debugging React state logic  
- Improving UI layout and CSS responsiveness  
- Structuring Firebase write operations  

All code was reviewed, tested, and integrated manually by the student.

---

## Known Issues / Future Improvements
- Add flip animations and sound effects  
- Add a historical results dashboard  
- Introduce difficulty-based scoring  
- Add mobile haptics and better accessibility cues  

---

## Reflection (200–300 words)
Throughout this final project, I gained a much deeper understanding of how modern web applications are structured and deployed. Implementing this game forced me to think about application state, component communication, and user experience in a real, hands-on way. Working with React hooks—particularly `useState` and `useEffect`—strengthened my understanding of state-driven UI updates, timing functions, and reactivity. I also learned the importance of separating components, keeping logic clean, and creating reusable building blocks such as the `Card` component.

Integrating Firebase was one of the most valuable parts of the project because it required me to connect a client-side application to a real backend service. Setting up Firestore, configuring security rules, and writing data from the results screen helped me understand real-world data flow. It also demonstrated how simple API calls can extend an application beyond local functionality.

This project also taught me the practical challenges of UI design—centering layouts, building responsive components, choosing consistent colors, and making the interface feel polished. I iterated several times based on feedback and technical constraints.

Overall, this project improved both my technical and design skills, gave me confidence working with modern frameworks, and helped me practice problem-solving in a realistic development workflow.

---

##
