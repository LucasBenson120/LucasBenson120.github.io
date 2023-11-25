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
              <p>Average score = ${average.toFixed(2)}</p>`;
document.write(html1);

// The Miles Per Gallon Calculator
const miles = parseInt(prompt("Enter miles driven"));
const gallons = parseInt(prompt("Enter gallons of gas used"));
const mpg = miles / gallons;
const html2 = `<p>Miles: ${miles}</p>
              <p>Gallons: ${gallons}</p>
              <p>MPG: ${mpg.toFixed(2)}</p>`;
document.write(html2);

// Rectangle Area Calculator
function calculateRectangleArea() {
  const width = parseFloat(prompt("Enter the width of the rectangle"));
  const height = parseFloat(prompt("Enter the height of the rectangle"));
  const area = (width * height).toFixed(3);
  const html3 = `<p>Width: ${width}</p>
                <p>Height: ${height}</p>
                <p>Area: ${area}</p>`;
  document.write(html3);
}