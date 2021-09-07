// Empty string literal that the generated html page will be added to upon completion of user input.
let teamHTML = ``;

// generateTeamHTML function adds the manager card to the HTML string variable, followed by cards for engineers or interns as appropriate according to
// and in the order of the team members input provided by the user.
function generateTeamHTML(teamInput) {
  // Loops through the user input by team members.
  for (i = 0; i < teamInput.length; i++) {
    // For simplicity and consistency the Manager card is included in the for loop as opposed to having it before the for loop and starting at i = 1.
    if (i === 0) {
      // Adds the manager card to the HTML string. Includes the user input manager details in the appropriate places.
      teamHTML += `
            <!-- This is the manager card. Information is displayed as provided. -->
            <div class="card m-2 bg-darkest shadow" style="min-width: 18rem;">
                <h2 class='text-center text-white pt-1'>${teamInput[i].name}</h2>
                <h3 class='text-center text-white pb-1'><i class="fas fa-user-tie pr-2"></i>Team Manager</h3>
                <ul class="list-group list-group-flush bg-white">
                    <li class="list-group-item">ID: ${teamInput[i].ID}</li>
                    <!-- Clicking on the email address will bring up a new email in the default program with a pre-populated "To" field. -->
                    <li class="list-group-item">Email: <a href="mailto: ${teamInput[i].email}">${teamInput[i].email}</a></li>
                    <li class="list-group-item">Office Number: ${teamInput[i].officeNumber}</li>
                </ul>
            </div>
        `;
    } else if (teamInput[i].github) {
      // Adds an engineer card to the HTML string. Includes the user input engineer details in the appropriate places.
      teamHTML += `
            <!-- This is an engineer card. Information is displayed as provided. -->
            <div class="card m-2 bg-darkest shadow" style="min-width: 18rem;">
                <h2 class='text-center text-white pt-1'>${teamInput[i].name}</h2>
                <h3 class='text-center text-white pb-1'><i class="fas fa-laptop-code pr-2"></i>Engineer</h3>
                <ul class="list-group list-group-flush bg-white">
                    <li class="list-group-item">ID: ${teamInput[i].ID}</li>
                    <!-- Clicking on the email address will bring up a new email in the default program with a pre-populated "To" field. -->
                    <li class="list-group-item">Email: <a href="mailto: ${teamInput[i].email}">${teamInput[i].email}</a></li>
                    <!-- Clicking on the GitHub username will open their GitHub page in a new tab, provided a valid username was entered. -->
                    <li class="list-group-item">Github: <a href="https://github.com/${teamInput[i].github}/" target="_blank">${teamInput[i].github}</a></li>
                </ul>
            </div>
        `;
    } else if (teamInput[i].school) {
      // Adds an intern card to the HTML string. Includes the user input intern details in the appropriate places.
      teamHTML += `
            <!-- This is an intern card. Information is displayed as provided. -->
            <div class="card m-2 bg-darkest shadow" style="min-width: 18rem;">
                <h2 class='text-center text-white pt-1'>${teamInput[i].name}</h2>
                <h3 class='text-center text-white pb-1'><i class="fas fa-user-graduate pr-2"></i>Intern</h3>
                <ul class="list-group list-group-flush bg-white">
                    <li class="list-group-item">ID: ${teamInput[i].ID}</li>
                    <!-- Clicking on the email address will bring up a new email in the default program with a pre-populated "To" field. -->
                    <li class="list-group-item">Email: <a href="mailto: ${teamInput[i].email}">${teamInput[i].email}</a></li>
                    <li class="list-group-item">School: ${teamInput[i].school}</li>
                </ul>
            </div>
        `;
    }
  }
  // Returns the full page HTML by calling the generateOuterHTML function with the teamHTML string as argument. This combines the outer HTML with the
  // team cards to produce the full page.
  return generateOuterHTML(teamHTML);
}

// generateOuterHTML produces the HTML for the whole page by inserting the team cards section of the HTML produced by generateTeamHTML into the main section
// of the page where the cards need to be.
function generateOuterHTML(teamHTML) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Linking stylesheets. -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body class="bg-lighter">
    <header class='container-fluid text-center text-white py-3'>
        <h1>
            Team Profile
        </h1>
    </header>

    <!-- The main section contains the team information cards. Manager will appear first, followed by remaining team members in the order they were added. -->
    <main class='container-fluid'>
        <div class='row justify-content-center'>
            ${teamHTML}
        </div>
    </main>
    
    <!-- Linking scripts required for functionality. -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>`;
}

// Exports the generateTeamHTML. Note that this returns the full page HTML, as stated by that functions return.
module.exports = generateTeamHTML;
