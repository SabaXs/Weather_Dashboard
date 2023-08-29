import React, { useState } from 'react';

function InputForm({ setCity }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>This is a website created using React. This website uses the API Key obtained from OpenWeather Map and uses it to display the weather details of the searched city. </p>
      <h3>Enter the city name:</h3>
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> <br></br><br></br>
      <button type="submit">Get Details</button>
    </form>
  );
}

export default InputForm;
