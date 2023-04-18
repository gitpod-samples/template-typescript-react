import React, { useState } from 'react';

const App: React.FC = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(event.target.value);
  };

  const handleAddition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum.toString());
  };

  return (
    <form onSubmit={handleAddition}>
      <label>
       Enter the First Number :
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <br />
      <label>
      Enter the Second Number :
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <br/>
      <label>
       Result :
        <input type="text" value={result} readOnly />
      </label>
      <br />
      <button type="submit">Sum</button>
    </form>
  );
};

export default App;


