

// Program Entry Point

function getValues2() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // check if they are in fact INTEGERS !

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) ) {

        // generate a list of NUMBERS
        let numbers = generateNumbers(fizzValue, buzzValue);

        // DISPLAY A LIST OF NUMBERS
        displayData(numbers);

    } 
    else {
        Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        text: 'Only integers are allowed for Hundo'
         })
    }
    
}

function generateNumbers(fizzValue, buzzValue) {

    let numbers= [];
    for (let i = 1; i <= 100; i++) {

     if (number % (buzzValue * fizzValue) == 0) {
        numbers.push("FIZZBUZZ");

       } else if (number % (buzzValue) == 0) {
         numbers.push("buzz");
       } else if (number % (fizzValue) == 0) {
         numbers.push("fizz");
      } else {
        numbers.push(i);
      }
    
    }

    return numbers;

}

// function displayNumbers(numbers) {

//     let templateRows = "";
//     for (let index = 0; index < numbers.length; index ++) {
//       let number = numbers[index];
//         let result = "";

//       if (number % 15 == 0) {
//         result = "FIZZBUZZ";
//       } else if (number % 5 == 0) {
//         result = "buzz";
//       } else if (number % 3 == 0) {
//         result = "fizz";
//       } else {
//         result = number;
//       }

      
//         let row = `<tr><td class="${result}">${result}</td></tr>`;
//         templateRows += row;


//     }

//     document.getElementById("results").innerHTML = templateRows;
// }

function displayData(fbData) {
    let contentDiv = document.getElementById("results");
    let content = "";

    //   CLEAR PREVIOUS DATA
    contentDiv.innerHTML = "";

    for (let i = 0; i < fbData.length; i++) {
        let dataValue = fbData[i];
        let dataElement = `<div class="col ${dataValue}">${dataValue}</div>`;
        content += dataElement;
    }

    // WRITE THE RESULTS TO THE PAGE
    contentDiv.innerHTML = content;
}