function calculateAge() {
  const year = document.getElementById("birthYear").value;
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  const result = document.getElementById("result");
  if (year === "" || year > currentYear || year < 1900) {
    result.innerText = "Please enter a valid birth year!";
  } else {
    result.innerText = `You are ${age} years old. 🎉`;
  }
}

// 🎨 Function to generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// ⏳ Change background color every 2 seconds
setInterval(() => {
  document.body.style.backgroundColor = getRandomColor();
}, 2000);
