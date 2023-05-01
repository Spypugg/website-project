// Event Listner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input Values
  let answer1 = document.getElementById("Quest1-in").value;
  let answer2 = document.getElementById("Quest2-in").value;
  let answer3 = document.getElementById("Quest3-in").value;
  let answer4 = document.getElementById("Quest4-in").value;

  // Declare Variables
  let ans1;
  let ans2;
  let ans3;
  let ans4;
  let response;

  // Console.log and True/False Processing

  if (answer1 === "AH-94" || answer1 === "AH-94 (Dragonfly)") {
    document.getElementById("output1").innerHTML = "Correct";
    ans1 = 1;
    document.getElementById("Quest1-in").style.borderColor = "green";
    console.log(`Input 1 = "${answer1}", which is Correct`);
  } else if (answer1 === "") {
    document.getElementById("output1").innerHTML = "Please Input Answer";
    ans1 = 0;
    document.getElementById("Quest1-in").style.borderColor = "red";
    console.log(`Input 1 = "${answer1}", which is Nothing`);
  } else {
    document.getElementById("output1").innerHTML = "Incorrect";
    ans1 = 0;
    document.getElementById("Quest1-in").style.borderColor = "red";
    console.log(`Input 1 = "${answer1}", which is Incorrect`);
  }

  if (answer2 === "F-45A" || answer2 === "F-45A (Ghost)") {
    document.getElementById("output2").innerHTML = "Correct";
    ans2 = 1;
    document.getElementById("Quest2-in").style.borderColor = "green";
    console.log(`Input 2 = "${answer2}", which is Correct`);
  } else if (answer2 === "") {
    document.getElementById("output2").innerHTML = "Please Input Answer";
    ans2 = 0;
    document.getElementById("Quest2-in").style.borderColor = "red";
    console.log(`Input 2 = "${answer2}", which is Nothing`);
  } else {
    document.getElementById("output2").innerHTML = "Incorrect";
    ans2 = 0;
    document.getElementById("Quest2-in").style.borderColor = "red";
    console.log(`Input 2 = "${answer2}", which is Incorrect`);
  }

  if (answer3 === "AV-42C" || answer3 === "AV-42 (Kestrel)") {
    document.getElementById("output3").innerHTML = "Correct";
    ans3 = 1;
    document.getElementById("Quest3-in").style.borderColor = "green";
    console.log(`Input 3 = "${answer3}", which is Correct`);
  } else if (answer3 === "") {
    document.getElementById("output3").innerHTML = "Please Input Answer";
    ans3 = 0;
    document.getElementById("Quest3-in").style.borderColor = "red";
    console.log(`Input 3 = "${answer3}", which is Nothing`);
  } else {
    document.getElementById("output3").innerHTML = "Incorrect";
    ans3 = 0;
    document.getElementById("Quest3-in").style.borderColor = "red";
    console.log(`Input 3 = "${answer3}", which is Incorrect`);
  }

  if (answer4 === "F/A-26B" || answer4 === "F/A-26B (Wasp)") {
    document.getElementById("output4").innerHTML = "Correct";
    ans4 = 1;
    document.getElementById("Quest4-in").style.borderColor = "green";
    console.log(`Input 4 = "${answer4}", which is Correct`);
  } else if (answer4 === "") {
    document.getElementById("output4").innerHTML = "Please Input Answer";
    ans4 = 0;
    document.getElementById("Quest4-in").style.borderColor = "red";
    console.log(`Input 4 = "${answer1}", which is Nothing`);
  } else {
    document.getElementById("output4").innerHTML = "Incorrect";
    ans4 = 0;
    document.getElementById("Quest4-in").style.borderColor = "red";
    console.log(`Input 4 = "${answer4}", which is Incorrect`);
  }

  // Score Processing
  let totalp = ((ans1 + ans2 + ans3 + ans4) / 4) * 100;
  let total4 = ans1 + ans2 + ans3 + ans4;
  if (total4 === 1) {
    response = "You Could do Better";
  } else if (total4 === 2) {
    response = "Half Way, Try Again";
  } else if (total4 === 3) {
    response = "Good Job";
  } else if (total4 === 0) {
    response = "Please try Again";
  } else {
    response = "Great Job";
  }

  // Output
  let output = `Your Total is ${total4}/4 which is ${totalp}%, ${response}`;
  document.getElementById("outputansw").innerHTML = output;
}
