import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";

export default function App() {
  // 🎯 State variables (game memory)
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1); 
  // This creates a random number between 1 and 100 at the start

  const [guess, setGuess] = useState(""); // Stores what the user types
  const [feedback, setFeedback] = useState(""); // Stores the message (too high, too low, correct)
  const [guessCount, setGuessCount] = useState(0); // Keeps track of how many guesses were made

  // 🔹 Function that runs when the user presses "Submit Guess"
  const handleGuess = () => {
    const userGuess = parseInt(guess); // Convert the text input into a number

    // If the user typed something that's not a number
    if (isNaN(userGuess)) {
      setFeedback("⚠️ Please enter a valid number!");
      return;
    }

    // Increase the guess counter by 1
    setGuessCount(guessCount + 1);

    // Compare the guess with the secret number
    if (userGuess < secretNumber) {
      setFeedback("⬇️ Too low! Try again.");
    } else if (userGuess > secretNumber) {
      setFeedback("⬆️ Too high! Try again.");
    } else {
      setFeedback("🎉 Congratulations! You guessed the number!");
    }
  };

  // 🔹 Function that resets the game when the user presses "Restart"
  const restartGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1); // Generate a new random number
    setGuess(""); // Clear the input box
    setFeedback(""); // Clear the feedback message
    setGuessCount(0); // Reset the guess counter
  };

  return (
    <View style={styles.container}>
      {/* Game title */}
      <Text style={styles.title}>🎯 Mystery Number Challenge</Text>

      {/* Input field for the guess */}
      <TextInput
        style={styles.input}
        placeholder="Enter your guess (1-100)"
        keyboardType="numeric" // Only show number keyboard
        value={guess}
        onChangeText={setGuess} // Update guess when typing
      />

      {/* Button to submit the guess */}
      <TouchableHighlight style={styles.button} onPress={handleGuess} underlayColor="#45a049">
        <Text style={styles.buttonText}>Submit Guess</Text>
      </TouchableHighlight>

      {/* Show feedback message */}
      <Text style={styles.feedback}>{feedback}</Text>

      {/* Show number of guesses */}
      <Text style={styles.counter}>Guesses: {guessCount}</Text>

      {/* Restart button */}
      <TouchableHighlight style={styles.restartButton} onPress={restartGame} underlayColor="#e64a19">
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableHighlight>
    </View>
  );
}

// 🎨 Styles for the app
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20, 
    backgroundColor: "#f0f8ff" 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    color: "#333" 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    width: "80%", 
    marginBottom: 20, 
    borderRadius: 5, 
    fontSize: 16, 
    backgroundColor: "#fff" 
  },
  button: { 
    backgroundColor: "#4CAF50", 
    padding: 12, 
    borderRadius: 5, 
    marginBottom: 10, 
    width: "60%", 
    alignItems: "center" 
  },
  restartButton: { 
    backgroundColor: "#FF5722", 
    padding: 12, 
    borderRadius: 5, 
    marginTop: 20, 
    width: "60%", 
    alignItems: "center" 
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  feedback: { 
    fontSize: 18, 
    marginVertical: 10, 
    color: "#000" 
  },
  counter: { 
    fontSize: 16, 
    marginTop: 10, 
    color: "#555" 
  }
});
