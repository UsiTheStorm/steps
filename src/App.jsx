import { useState } from 'react';
import './App.css';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑', 'Blob 🦄'];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1);
  }

  function handleClose() {
    setIsOpen(!isOpen);
  }

  function hendleSteps(clickedStep) {
    setStep(clickedStep);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        {isOpen ? '×' : '+'}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={step >= idx + 1 ? 'active' : ''}
                onClick={() => hendleSteps(idx + 1)}
              >
                {idx + 1}
              </div>
            ))}
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button style={{ color: '#fff' }} onClick={handlePrevious} disabled={step === 1}>
              Previous
            </button>
            <button
              style={{ color: '#fff' }}
              onClick={handleNext}
              disabled={step === messages.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
