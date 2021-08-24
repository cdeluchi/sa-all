(function (listOfCountries) {
    // console.log("yeah you can actually write some logic", $);
    // console.log("listOfCountries:", listOfCountries);
    var searchField = $("input");
    // console.log("searchField:", searchField);
    var resultsContainer = $(".results-container");
    // console.log("resultsContainer: ", resultsContainer);

    // #1 INPUT EVENT
    searchField.on("input", function () {
        // console.log("input happening");
        var inputVal = searchField.val().toLowerCase();
        // console.log("inputVal:", inputVal);
        // console.log("length of input:", inputVal.length);
        // 💥 IF the input field is empty, don't show any results
        var matchResults = [];
        // loop over our countries and see if any of them start with letters matching the input val
        for (var i = 0; i < listOfCountries.length; i++) {
            // console.log("country:", listOfCountries[i].indexOf(inputVal));
            // check if a country starts with the input value
            if (listOfCountries[i].toLowerCase().indexOf(inputVal) === 0) {
                // console.log("match found:", listOfCountries[i]);
                matchResults.push(listOfCountries[i]);
                // once our matchResults contains four countries end our loop and match search early
                if (matchResults.length === 4) {
                    // console.log("got four countries in my results");
                    break;
                }
            }
        }
        // console.log("matchResults:", matchResults);

        // let's make our results show up on screen
        // step 1: generate html elements for each of our country
        var htmlForCountries = "";
        // 💥 IF the user types gibbersih or sth that doesn't match anything, we need to render "no results"
        for (var j = 0; j < matchResults.length; j++) {
            htmlForCountries +=
                "<p class='country'>" + matchResults[j] + "</p>";
        }
        // console.log("htmlForCountries:", htmlForCountries);
        // step 2: put it on screen
        resultsContainer.html(htmlForCountries);
    });

    // #2 MOUSEOVER EVENT
    // problem, the p tags that we want to listen on for the mouseover, are not present when the script initially loads, so we need to attach our listener to sth that IS there upon loading

    $(document).on("mouseDown", function () {
        console.log("when mousedown in a country it will fix at the input box");
        var mouseDown = resultsContainer;
        jQresultContainer.append(searchField);
        console.log("show the input result");
        jQsearchField = $(".input");

        // when the user click at the country the another country should desapear.
        $(resultsContainer).on("searchField", function () {
            var searchOff = resultsContainer;
            console.log("result should appear here:", resultsContainer);
            for (var i = 0; i < resultsContainer.length; i++);
            return ["country"];
        });
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
