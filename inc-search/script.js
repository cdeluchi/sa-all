(function (listOfCountries) {
    var searchField = $("input");
    var resultsContainer = $(".results-container");

    // #1 INPUT EVENT
    searchField.on("input", function () {
        var inputVal = searchField.val().toLowerCase();
        if (inputVal.length == 0) {
            resultsContainer.hide();
            return;
        }
        resultsContainer.show();

        // 💥 IF the input field is empty, don't show any results
        var matchResults = [];
        for (var i = 0; i < listOfCountries.length; i++) {
            if (listOfCountries[i].toLowerCase().indexOf(inputVal) === 0) {
                matchResults.push(listOfCountries[i]);
                if (matchResults.length === 4) {
                    break;
                }
            }
        }

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

    resultsContainer.on("mousedown", function (event) {
        // console.log("when mousedown in a country it will fix at the input box");
        var country = $(event.target).html();
        // console.log($(event.target).html());
        searchField.val(country);
        // when the user click at the country the another country should desapear.
        resultsContainer.hide();
    });
    // now when the mouse hover in this country the color of the mouse should change.
    resultsContainer.on("mouseover", "p", function (e) {
        $(".highlight").removeClass("highlight");
        $(e.target).addClass("highlight");
        // console.log(e.target);
    });

    // KEY DOWN event
    resultsContainer.on("keydown", function (event) {
        if (event.keyCode === 40) {
            //arrow down
            //loop for all "p" country and apply the .class
            for (var i = 0; i < $("p").length; i++) {
                if ($("p").eq(i).hasClass("highllight")) {
                    // when has no more "p" stop here
                    break;
                }
            }
            if (i !== 0) {
                // use remove class before add class as we used in #2
                $("p").eq(i).removeClass("highlight");
                $("p")
                    .eq(i - 1)
                    .addClass("highlight");
                console.log("highlight");
            }
        }
    });
    resultsContainer.ready(function () {
        $("boxfocus").focus();
        console.log("boxfocus");
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
