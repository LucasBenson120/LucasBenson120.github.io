let total = 0;

const score1 = parseInt(prompt("Enter test score"));
total += score1;        

const score2 = parseInt(prompt("Enter test score"));
total += score2;

const score3 = parseInt(prompt("Enter test score"));
total += score3;

const average = parseInt(total/3);

const html1 = `<p>Score 1 = ${score1}</p>
              <p>Score 2 = ${score2}</p>
              <p>Score 3 = ${score3}</p>
              <p>Average score = ${average}</p>`;
document.write(html1);


function calculateRectangleArea() {
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);
    var area = (width * height).toFixed(3);
    document.getElementById('result').innerHTML = "The area of the rectangle is: " + area;
  }