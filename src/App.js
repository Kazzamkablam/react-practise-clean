// Import the necessary components and hooks from React and the local file system
// You can find premade styles under css files next to
import './App.css';

// Define the main App component
function App() {

  // Render the main App component
  return (
    <div className="App">
      {/* Include each child component and pass the necessary props */}
      PersonalDetails<br />
      JobExperience<br />
      {/* Job Experience should be repeatable section */}
      Education<br />
       {/* Education should be repeatable section */}
      Description<br />
      {/* Tell us about yourself */}
      SubmitButton<br />
      {/* Validation should be handled when submit button is pressed, for this exercise validate dates of job experience and education */}
    </div>
  );
}

// Export the App component so it can be used elsewhere
export default App;