const searchParkType = document.getElementById('searchParkType');
const searchLocation = document.getElementById('searchLocation');
const parkContainer = document.getElementById('parkContainer');
const clearButton = document.getElementById('clearButton');
const mountainSelect = document.getElementById('mountainSelect');
const mountainInfo = document.getElementById('mountainInfo');
const mountainName = document.getElementById('mountainName');
const mountainDescription = document.getElementById('mountainDescription');
const mountainElevation = document.getElementById('mountainElevation');

// Function to filter parks by state and park type
const filterParks = () => {
  const selectedState = searchLocation.value;
  const selectedParkType = searchParkType.value;

  parkContainer.innerHTML = '';

  if (selectedState === '' && selectedParkType === '') {
    // Clear the park container when no filters are selected
    return;
  }

  const filteredParks = nationalParksArray.filter(park => {
    const matchState = !selectedState || park.State === selectedState;
    const matchParkType = !selectedParkType || parkTypesArray.includes(selectedParkType) && park.LocationName.includes(selectedParkType);
    return matchState && matchParkType;
  });

  filteredParks.forEach(park => {
    const cardElement = document.createElement('div');
    cardElement.className = 'col-md-4';

    cardElement.innerHTML = `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${park.LocationName}</h5>
          <p class="card-text">
            Address: ${park.Address}<br>
            City: ${park.City}<br>
            State: ${park.State}<br>
            Zip Code: ${park.ZipCode}<br>
            Phone: ${park.Phone}
          </p>
          ${park.Visit ? `<a href="${park.Visit}" class="card-link">Visit Website</a>` : ''}
        </div>
      </div>
    `;

    parkContainer.appendChild(cardElement);
  });
};

// Add event listeners to the state and park type select elements
searchLocation.addEventListener('change', filterParks);
searchParkType.addEventListener('change', filterParks);

// Initially load all parks
filterParks();

window.addEventListener('DOMContentLoaded', () => {
  // Populating the select elements
  parkTypesArray.forEach(parkType => {
    const option = document.createElement('option');
    option.value = parkType;
    option.text = parkType;
    searchParkType.appendChild(option);
  });

  locationsArray.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.text = location;
    searchLocation.appendChild(option);
  });

  // Populating the mountain select element
  mountainsArray.forEach(mountain => {
    const option = new Option(mountain.name, mountain.name);
    mountainSelect.add(option);
  });
});

// Function to clear selected filters and show all parks
const clearFilters = () => {
  searchLocation.value = ''; // Clear the selected location
  searchParkType.value = ''; // Clear the selected park type
  filterParks(); // Show all parks
};

// Add event listener to the clear button
clearButton.addEventListener('click', clearFilters);

// Function to update the displayed mountain information
function updateMountainInfo() {
  const selectedIndex = mountainSelect.selectedIndex;
  if (selectedIndex !== -1) {
    const selectedMountain = mountainsArray[selectedIndex];

    mountainName.textContent = selectedMountain.name;
    mountainDescription.textContent = selectedMountain.desc;
    mountainElevation.textContent = `Elevation: ${selectedMountain.elevation} feet`;
    // Update additional mountain information here
  }
}

// Event listener for when a mountain is selected
mountainSelect.addEventListener('change', () => {
  const selectedIndex = mountainSelect.selectedIndex;
  if (selectedIndex !== -1) {
    updateMountainInfo();
    mountainInfo.style.display = 'block';
  } else {
    mountainInfo.style.display = 'none';
  }
});
