// Import Hooks
const { useState, useEffect } = React;




// array of buttons

const btnArray = [
{ text: "AC", id: "clear", type: "clear" },
{ text: "/", id: "divide", type: "operator" },
{ text: "*", id: "multiply", type: "operator" },
{ text: "7", id: "seven", type: "number" },
{ text: "8", id: "eight", type: "number" },
{ text: "9", id: "nine", type: "number" },
{ text: "-", id: "subtract", type: "operator" },
{ text: "4", id: "four", type: "number" },
{ text: "5", id: "five", type: "number" },
{ text: "6", id: "six", type: "number" },
{ text: "+", id: "add", type: "operator" },
{ text: "1", id: "one", type: "number" },
{ text: "2", id: "two", type: "number" },
{ text: "3", id: "three", type: "number" },
{ text: "=", id: "equals", type: "equal" },
{ text: "0", id: "zero", type: "number" },
{ text: ".", id: "decimal", type: "decimal" }];





// Tailwind Design Variables below

const outerUL = "grid grid-cols-4 grid-rows-6 gap-1 grid-flow-row-dense text-xl";
const liDesign = "bg-white rounded-sm shadow-md border border-transparent hover:border-gray-100 cursor-pointer ";
const divDesign = "h-12 text-center flex justify-center items-center";


function App() {

  const [display, setDisplay] = useState('0');

  // handle number function
  const handleNumber = event => {
    const number = event.target.textContent;

    if (display === '0') {
      setDisplay(number);
    } else
    {
      setDisplay(display + number);
    }
  };

  // handle operators function
  const handleOperator = event => {
    const operator = event.target.textContent;
    setDisplay(display + ' ' + operator + ' ');
  };


  // handle equal function
  const handleEqual = () => {
    setDisplay(eval(display));
  };


  // handle decimal function
  const handleDecimal = () => {
    const arr = display.toString().split(' ');
    const lastElement = arr[arr.length - 1];

    if (!lastElement.includes('.'))
    {
      setDisplay(display + '.');
    }
  };

  // handle All Clear function below
  const handleClear = () => {
    setDisplay('0');
  };

  // --- previous code below --- //
  // declaring display area useState hook
  //   const [input, setInput] = useState('');

  //   const [answer, setAnswer] = useState(0);


  //   // set the display text to something
  //   const setDisplayText = (text) => {
  //     setInput((prev)=>prev+ text);
  //     if(input[input.length-1] == "="){
  //         if(/[0-9.]/.test(text)){
  //           setInput(text);
  //         }
  //         else{
  //           setInput(answer + text);
  //         }
  //       }


  //  }

  //    // calculate the values
  //   const calculate = () => {
  //     setAnswer(eval(input));
  //     setInput((prev) => prev + "=")
  //   }

  //   // AC function
  //   const allClear = () => {
  //     setInput("");
  //     setAnswer(0);
  //   }

  // map through all elements of btnArray

  // --- previous code above --- //

  const handleInputs = input => {
    if (input === 'number') {
      handleNumber();
    } else
    if (input === 'operator') {
      handleOperator();
    }
  };



  const btnArrFunction = btnArray.map(i => {

    return /*#__PURE__*/(
      React.createElement("li", { key: i.text, className: `${i.text === "AC" ? liDesign + "col-span-2" : i.text === "0" ? liDesign + "col-span-2" : i.text === "=" ? liDesign + "row-span-2" : liDesign}`, onClick: i.type === "number" ? handleNumber :
        i.type === "operator" ? handleOperator :
        i.type === "equal" ? handleEqual :
        i.type === "clear" ? handleClear :
        handleDecimal,
        id: i.id }, /*#__PURE__*/

      React.createElement("div", { className: divDesign },
      i.text)));




  });




  return /*#__PURE__*/(
    React.createElement("div", { className: "min-h-screen min-w-screen flex flex-col justify-center items-center text-white" }, /*#__PURE__*/
    React.createElement("h1", { class: "m-10 fond-bold" }, "Calculator Design"), /*#__PURE__*/
    React.createElement("div", { id: "calculator-body", class: "w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 mx-auto p-10 bg-green-800  rounded-lg shadow-md" }, /*#__PURE__*/


    React.createElement("ul", { className: outerUL }, /*#__PURE__*/
    React.createElement("li", { class: "rounded-sm shadow-md col-span-4 bg-gray-800" }, /*#__PURE__*/

    React.createElement("div", { class: "h-6 text-right font-bold text-sm mr-1 text-sm" }), /*#__PURE__*/


    React.createElement("div", { class: "h-6 text-right font-normal mr-1 text-sm" }, /*#__PURE__*/
    React.createElement("input", { id: "display", type: "text", className: "bg-gray-800 text-right", placeholder: "0", value: display }))),





    btnArrFunction))));






}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = /*#__PURE__*/React.createElement(App, null);
root.render(element);