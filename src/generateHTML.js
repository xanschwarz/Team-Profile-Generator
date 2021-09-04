// Empty string. generateHTML calls function for beginning of html, adds to empty string.
// Then calls functions depending on members in team array to add further HTML. When complete calls function to end HTML.
// function generateHTML(team) {
//     let html = `Initial html`
//     return html;
//   }

let teamHTML = ``;

function generateTeamHTML(teamInput) {
    for (i = 0; i < teamInput.length; i++) {
        if (i === 0) {
            // Manager card
            teamHTML += `
            <div class="card m-2" style="width: 18rem;">
                <h2 class='text-center text-white bg-dark'>Manager</h2>
                <div class="card-body">
                <p class="card-text">Name: ${teamInput[i].name}</p>
                <p class="card-text">ID: ${teamInput[i].ID}</p>
                <p class="card-text">Email: <a href="mailto: ${teamInput[i].email}">${teamInput[i].email}</a></p>
                <p class="card-text">Office Number: ${teamInput[i].officeNumber}</p>
                </div>
            </div>
        `
        }
        else if (teamInput[i].github) {
            // Engineer card
            teamHTML += `
            <div class="card m-2" style="width: 18rem;">
                <h2 class='text-center text-white bg-dark'>Engineer</h2>
                <div class="card-body">
                <p class="card-text">Name: ${teamInput[i].name}</p>
                <p class="card-text">ID: ${teamInput[i].ID}</p>
                <p class="card-text">Email: <a href="mailto: ${teamInput[i].email}">${teamInput[i].email}</a></p>
                <p class="card-text">Github: <a href="https://github.com/${teamInput[i].github}/" target="_blank">${teamInput[i].github}</a></p>
                </div>
            </div>
        `
        }
        else if (teamInput[i].school) {
            // Intern card
            teamHTML += `
            <div class="card m-2" style="width: 18rem;">
                <h2 class='text-center text-white bg-dark'>Intern</h2>
                <div class="card-body">
                <p class="card-text">Name: ${teamInput[i].name}</p>
                <p class="card-text">ID: ${teamInput[i].ID}</p>
                <p class="card-text">Email: <a href="mailto: ${teamInput[i].email}">${teamInput[i].email}</a></p>
                <p class="card-text">School: ${teamInput[i].school}</p>
                </div>
            </div>
        `
        }
    }
    return generateOuterHTML(teamHTML);
}

function generateOuterHTML(teamHTML) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header class='container-fluid text-center text-white py-3'>
            <h1>
                Team Profile
            </h1>
        </header>

        <section class='container-fluid'>
            <div class='row justify-content-center'>
                ${teamHTML}
            </div>
        </section>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </body>
    </html>`;
}

module.exports = generateTeamHTML;