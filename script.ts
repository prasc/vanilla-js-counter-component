// . **Counter Component with Increment/Decrement**
//    - **Skills**: State management, event handling, and reusable component structure.
//    - **Goal**: Implement a counter with “+” and “-” buttons to increment or decrement a value. Add upper and lower bounds to practice validation.

// A counter value
// onClick for increment/decrement that will modify counter value
// Render counter value within the #value span

let counter = 0;

enum ACTION_TYPE {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

const valueSpan = document.getElementById('value') as HTMLSpanElement | null;
const errorSpan = document.getElementById('error') as HTMLSpanElement | null;
const incrementButton = document.getElementById(
  ACTION_TYPE.INCREMENT
) as HTMLButtonElement;
const decrementButton = document.getElementById(
  ACTION_TYPE.DECREMENT
) as HTMLButtonElement;

incrementButton?.addEventListener('click', () => {
  handleClick(ACTION_TYPE.INCREMENT);
});
decrementButton?.addEventListener('click', () => {
  handleClick(ACTION_TYPE.DECREMENT);
});

const handleClick = (type: string) => {
  if (type === ACTION_TYPE.INCREMENT && validate(counter + 1)) {
    incrementCounter();
  } else if (type === ACTION_TYPE.DECREMENT && validate(counter - 1)) {
    decrementCounter();
  } else {
    displayError(type);
  }
};

const incrementCounter = () => {
  counter++;
  updateError('');
  updateCounter();
};

const decrementCounter = () => {
  counter--;
  updateError('');
  updateCounter();
};

const validate = (newCounter: number) => {
  if (newCounter >= 0 && newCounter <= 10) return true;
  return false;
};

const updateCounter = (countValue = counter) => {
  if (valueSpan) {
    valueSpan.textContent = `${countValue}`;
  }
};

const displayError = (type: ACTION_TYPE) => {
  const message =
    type === ACTION_TYPE.INCREMENT
      ? 'Count is too high'
      : 'Count cannot be negative';
  updateCounter('');
  updateError(message);
};

const updateError = (error: string) => {
  if (errorSpan) {
    errorSpan.textContent = `${error}`;
  }
};

updateCounter();
