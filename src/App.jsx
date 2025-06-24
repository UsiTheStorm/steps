import { useState } from 'react';
import './App.css';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑', 'Blob 🦄'];

function Button({ textColor, onClick, isDisabled, children }) {
  return (
    <button style={{ color: textColor }} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}

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

  function handleStepClick(clickedStep) {
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
            {messages.map((msg, idx) => {
              const activeStep = idx + 1;
              return (
                <div
                  key={idx}
                  className={step >= activeStep ? 'active' : ''}
                  onClick={() => handleStepClick(activeStep)}
                >
                  {activeStep}
                </div>
              );
            })}
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textColor="#fff"
              onClick={handlePrevious}
              // text="Previous"
              isDisabled={step === 1}
            >
              <span>👈</span>Previous
            </Button>
            {/* <button style={{ color: '#fff' }} onClick={handlePrevious} disabled={step === 1}>
              Previous
            </button> */}

            <Button
              textColor="#fff"
              onClick={handleNext}
              // text="Next"
              isDisabled={step === messages.length}
            >
              Next<span>👉</span>
            </Button>
            {/* <button
              style={{ color: '#fff' }}
              onClick={handleNext}
              disabled={step === messages.length}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}
export default App;
