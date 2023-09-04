import React, { useState } from 'react';
import './App.css';

function App() {
  const [initiated, setInitiated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [preAssessment, setPreAssessment] = useState(0);

  const initiateApplication = async () => {
    // Make a POST request to /initiate on the backend
    await fetch('/initiate', { method: 'POST' });
    setInitiated(true);
  };

  const submitApplication = async () => {
    // Simulate balance sheet (replace with actual data)
    const balanceSheet = [
      { "year": 2020, "month": 12, "profitOrLoss": 250000, "assetsValue": 1234 },
      // ... (other months)
    ];

    const data = {
      businessDetails: { name: "Sample Business", yearEstablished: 2015 },
      loanAmount: 100000,
      accountingProvider: "Xero", // Replace with user's selection
      balanceSheet: balanceSheet
    };

    const response = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    setPreAssessment(result.preAssessment);
    setSubmitted(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!initiated && <button onClick={initiateApplication}>Start Application</button>}
        {initiated && !submitted && <button onClick={submitApplication}>Submit Application</button>}
        {submitted && <p>Pre-assessment: {preAssessment}</p>}
      </header>
    </div>
  );
}

export default App;
