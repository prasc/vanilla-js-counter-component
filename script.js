// . **Counter Component with Increment/Decrement**
//    - **Skills**: State management, event handling, and reusable component structure.
//    - **Goal**: Implement a counter with “+” and “-” buttons to increment or decrement a value. Add upper and lower bounds to practice validation.
// A counter value
// onClick for increment/decrement that will modify counter value
// Render counter value within the #value span
var counter = 0;
var ACTION_TYPE;
(function (ACTION_TYPE) {
    ACTION_TYPE["INCREMENT"] = "increment";
    ACTION_TYPE["DECREMENT"] = "decrement";
})(ACTION_TYPE || (ACTION_TYPE = {}));
var valueSpan = document.getElementById('value');
var errorSpan = document.getElementById('error');
var incrementButton = document.getElementById(ACTION_TYPE.INCREMENT);
var decrementButton = document.getElementById(ACTION_TYPE.DECREMENT);
incrementButton === null || incrementButton === void 0 ? void 0 : incrementButton.addEventListener('click', function () {
    handleClick(ACTION_TYPE.INCREMENT);
});
decrementButton === null || decrementButton === void 0 ? void 0 : decrementButton.addEventListener('click', function () {
    handleClick(ACTION_TYPE.DECREMENT);
});
var handleClick = function (type) {
    if (type === ACTION_TYPE.INCREMENT && validate(counter + 1)) {
        incrementCounter();
    }
    else if (type === ACTION_TYPE.DECREMENT && validate(counter - 1)) {
        decrementCounter();
    }
    else {
        displayError(type);
    }
};
var incrementCounter = function () {
    counter++;
    updateError('');
    updateCounter();
};
var decrementCounter = function () {
    counter--;
    updateError('');
    updateCounter();
};
var validate = function (newCounter) {
    if (newCounter >= 0 && newCounter <= 10)
        return true;
    return false;
};
var updateCounter = function (countValue) {
    if (countValue === void 0) { countValue = counter; }
    if (valueSpan) {
        valueSpan.textContent = "".concat(countValue);
    }
};
var displayError = function (type) {
    var message = type === ACTION_TYPE.INCREMENT
        ? 'Count is too high'
        : 'Count cannot be negative';
    updateCounter('');
    updateError(message);
};
var updateError = function (error) {
    if (errorSpan) {
        errorSpan.textContent = "".concat(error);
    }
};
updateCounter();
