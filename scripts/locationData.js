// This is for the National Park page 
// This is inside the locationData.js

// $(document).ready(function() {
//     const searchForm = $('#searchForm');
//     const searchTypeSelect = $('#searchType');
//     const locationFields = $('#locationFields');
//     const searchLocationSelect = $('#searchLocation');
//     const parkTypeFields = $('#parkTypeFields');
//     const searchParkTypeSelect = $('#searchParkType');
//     const resultsContainer = $('#results');
//     const clearButton = $('#clearButton');
  
//     searchForm.on('submit', function(e) {
//       e.preventDefault(); // Prevent form submission
  
//       const searchType = searchTypeSelect.val();
  
//       if (searchType === 'location') {
//         const location = searchLocationSelect.val();
//         searchNationalParksByLocation(location);
//       } else if (searchType === 'parkType') {
//         const parkType = searchParkTypeSelect.val();
//         searchNationalParksByParkType(parkType);
//       }
//     });
  
//     clearButton.on('click', function() {
//       searchTypeSelect.val('');
//       locationFields.show();
//       searchLocationSelect.val('');
//       parkTypeFields.show();
//       searchParkTypeSelect.val('');
//       resultsContainer.empty();
//     });
  
//     searchTypeSelect.on('change', function() {
//       const searchType = searchTypeSelect.val();
  
//       if (searchType === 'location') {
//         locationFields.show();
//         parkTypeFields.show();
//       } else if (searchType === 'parkType') {
//         locationFields.hide();
//         parkTypeFields.show();
//       } else {
//         locationFields.hide();
//         parkTypeFields.hide();
//       }
//     });
  
//     function searchNationalParksByLocation(location) {
//       // Perform search by location
//     }
  
//     function searchNationalParksByParkType(parkType) {
//       // Perform search by park type
//     }
//   });

const locationsArray = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "DC",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
]

