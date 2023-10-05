import React, { useState } from 'react';
import './App.css';

function App() {
  const [isTest, setTest] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedOption = formData.get('logmath');
    setSelectedValue(selectedOption);
    setTest(true);
  }

  return (
    <div>
      <header>
        <h1>Ülalt-alla loogiskaskeem</h1>
      </header>
      <form onSubmit={handleFormSubmit}>
        <div className="choise">
          {!isTest ? (
            <div>
              <label htmlFor="bool1">Choose final value:</label>
              <select name="logmath" id="bool1">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <input type="submit" id="layer1" value="Ready" />
            </div>
          ) : (
            <div>
              <h2>TEST</h2>
              {selectedValue !== null && (
                <div>
                  <p>Вы выбрали: {selectedValue}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
