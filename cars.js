const cars = 
    [
        { name: 'BMW 3 Series', price: 41300, engineVolume: 2.0, horsePower: 340, avb: 4 },
        { name: 'Mercedes-Benz C-Class', price: 43700, engineVolume: 2.0, horsePower: 255, avb: 1 },
        { name: 'Audi A4', price: 40200, engineVolume: 2.0, horsePower: 261, avb: 1 },
        { name: 'Lexus ES', price: 41900, engineVolume: 2.5, horsePower: 302, avb: 1 },
        { name: 'Ferrari Roma', price: 243360, engineVolume: 3.9, horsePower: 612, avb: 2 },
        { name: 'Porsche 911', price: 106100, engineVolume: 3.0, horsePower: 379, avb: 1 },
        { name: 'McLaren 720S', price: 299000, engineVolume: 4.0, horsePower: 710, avb: 1 },
        { name: 'Rolls-Royce Phantom', price: 460000, engineVolume: 6.75, horsePower: 563, avb: 1 },
        { name: 'Aston Martin DB11', price: 217000, engineVolume: 4.0, horsePower: 528, avb: 3 },
        { name: 'Lamborghini Huracán', price: 261274, engineVolume: 5.2, horsePower: 631, avb: 1 },
        { name: 'Range Rover Velar', price: 62150, engineVolume: 3.0, horsePower: 395, avb: 4 },
        { name: 'Cadillac Escalade', price: 79065, engineVolume: 6.2, horsePower: 420, avb: 2 },
        { name: 'Tesla Model S', price: 79990, engineVolume: 0.0, horsePower: 1020, avb: 1 },
        { name: 'BMW X7', price: 77900, engineVolume: 3.0, horsePower: 335, avb: 10 },
        { name: 'Mercedes-Benz G-Class', price: 139900, engineVolume: 4.0, horsePower: 577, avb: 1 },
        { name: 'Audi Q7', price: 57400, engineVolume: 3.0, horsePower: 335, avb: 1 },
        { name: 'Lexus LX', price: 92980, engineVolume: 3.5, horsePower: 409, avb: 1 },
        { name: 'Ferrari SF90 Stradale', price: 507000, engineVolume: 4.0, horsePower: 986, avb: 3 },
        { name: 'Porsche Taycan', price: 86800, engineVolume: 0.0, horsePower: 402, avb: 1 },
        { name: 'McLaren GT', price: 210000, engineVolume: 4.0, horsePower: 612, avb: 1 },
        { name: 'Rolls-Royce Ghost', price: 343000, engineVolume: 6.75, horsePower: 563, avb: 1 },
        { name: 'Aston Martin Vantage', price: 142086, engineVolume: 4.0, horsePower: 503, avb: 1 },
        { name: 'Lamborghini Aventador', price: 546847, engineVolume: 6.5, horsePower: 759, avb: 1 },
        { name: 'Range Rover Sport', price: 83400, engineVolume: 5.0, horsePower: 575, avb: 1 },
        { name: 'Cadillac CT5-V Blackwing', price: 90895, engineVolume: 6.2, horsePower: 668, avb: 7 },
        { name: 'Tesla Model X', price: 89990, engineVolume: 0.0, horsePower: 1020, avb: 1 },
        { name: 'BMW M5', price: 107900, engineVolume: 4.4, horsePower: 617, avb: 1 },
        { name: 'Mercedes-AMG E63 S', price: 112450, engineVolume: 4.0, horsePower: 603, avb: 1 },
        { name: 'Audi RS7', price: 118500, engineVolume: 4.0, horsePower: 591, avb: 1 },
        { name: 'Lexus LC500', price: 94300, engineVolume: 5.0, horsePower: 471, avb: 12 }
];

function displayCars(carArray) {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';

    carArray.forEach(car => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${car.name}</td>
            <td>$${car.price.toLocaleString()}</td>
            <td>${car.engineVolume} L</td>
            <td>${car.horsePower} h.p</td>
            <td>${car.avb}</td>
        `;
        carList.appendChild(row);
    });
}

displayCars(cars);

function sortCars() {
    const sortOption = document.getElementById('sortOption').value;
    let sortedCars = [...cars];

    switch (sortOption) {
        case 'nameAsc':
            sortedCars.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'nameDesc':
            sortedCars.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'priceAsc':
            sortedCars.sort((a, b) => a.price - b.price);
            break;
        case 'priceDesc':
            sortedCars.sort((a, b) => b.price - a.price);
            break;
        case 'engineAsc':
            sortedCars.sort((a, b) => a.engineVolume - b.engineVolume);
            break;
        case 'engineDesc':
            sortedCars.sort((a, b) => b.engineVolume - a.engineVolume);
            break;

        case 'noDublicateEngineVolume':
                sortedCars = sortedCars.reduce((newlist, car) => {
                    if (!newlist.find(c => c.engineVolume === car.engineVolume)) {
                        newlist.push(car);
                    }
                    return newlist;
                }, []).sort((a, b) => a.engineVolume - b.engineVolume); ;
                break;
    
    }

    displayCars(sortedCars);


}


// Day/Night theme switcher
const dayNightToggle = document.getElementById('day-night-toggle');
dayNightToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});


// Read More Button
const readMoreBtn = document.getElementById('read-more-btn');
readMoreBtn.addEventListener('click', () => {
  const moreInfo = document.getElementById('more-info');
  if (moreInfo.style.display === 'none') {
    moreInfo.style.display = 'block';
    readMoreBtn.textContent = 'Read Less';

  } else {
    moreInfo.style.display = 'none';
    readMoreBtn.textContent = 'Read More';
  }
});


const soundButton = document.getElementById('play-sound-btn');
soundButton.addEventListener('click', () => {
  const audio = new Audio('media/Revolution Performance 2021 Audi RS7 Power Package Dyno.mp3'); 
  audio.play();
});


const currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) {
  greeting = "Welcome to our Car Showroom! Start your morning with a luxury test drive.";
} else if (currentHour < 18) {
  greeting = "Good afternoon! Discover your dream car in our collection.";
} else {
  greeting = "Good evening! Explore the finest cars available in our showroom.";
}

document.getElementById("greeting").textContent = greeting;


document.getElementById("showMoreDetails").addEventListener("click", () => {
    const details = document.getElementById("car-details");
    details.style.display = details.style.display === "none" ? "block" : "none";
  });

  






// Function to get favorite cars from local storage
function getFavoriteCars() {
    const cars = localStorage.getItem("favoriteCars");
    return cars ? JSON.parse(cars) : [];
  }
  
  // Function to save favorite cars to local storage
  function saveFavoriteCars(cars) {
    localStorage.setItem("favoriteCars", JSON.stringify(cars));
  }
  
  // Function to add a car to the favorite cars list
  function addCarToList(car) {
    const carList = document.getElementById("carList1");
    const li = document.createElement("li");
    li.textContent = car;
    carList.appendChild(li);
  }
  
  // Function to display all favorite cars
  function displayFavoriteCars() {
    const favoriteCars = getFavoriteCars();
    const carList = document.getElementById("carList1");
    carList.innerHTML = ""; // Clear existing list
    favoriteCars.forEach(addCarToList);
  }
  
  // Event listener for the form submission
  document.getElementById("carForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const carInput = document.getElementById("carInput");
    const newCar = carInput.value.trim();
  
    if (newCar) {
      // Get current list, add new car, save to storage, and display updated list
      const favoriteCars = getFavoriteCars();
      favoriteCars.push(newCar);
      saveFavoriteCars(favoriteCars);
      addCarToList(newCar);
      carInput.value = ""; // Clear input field
    }
  });
  
  // Display the favorite cars list on page load
  displayFavoriteCars();
  
  
  const apiKey = "3a8a561cacf5a54aaf1cfe06";
  const baseUrl = "https://v6.exchangerate-api.com/v6";
  
  async function fetchExchangeRate(toCurrency) {
    const response = await fetch(`${baseUrl}/${apiKey}/latest/USD`);
    if (!response.ok) throw new Error("Failed to fetch exchange rate");
    const data = await response.json();
    return data.conversion_rates[toCurrency];
  }
  
  function displayConversion(priceInUSD, rate, currency) {
    const convertedPrice = (priceInUSD * rate).toFixed(2);
    document.getElementById("convertedPrice").textContent = `${convertedPrice} ${currency}`;
    document.getElementById("conversionResult").style.display = "block";
  }
  
  document.getElementById("currencyForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const priceInUSD = parseFloat(document.getElementById("priceInput").value);
    const toCurrency = document.getElementById("currencySelect").value;
  
    try {
      const exchangeRate = await fetchExchangeRate(toCurrency);
      displayConversion(priceInUSD, exchangeRate, toCurrency);
    } catch (error) {
      alert(error.message);
    }
  });
  