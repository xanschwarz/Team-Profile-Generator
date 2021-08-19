// Empty string. generateHTML calls function for beginning of html, adds to empty string.
// Then calls functions depending on members in team array to add further HTML. When complete calls function to end HTML.
// function generateHTML(team) {
//     let html = `Initial html`
//     return html;
//   }
  
//   module.exports = generateHTML;

function HTMLBegin() {
    let initialHTML = `<!DOCTYPE html>
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
        <div class='row justify-content-center'>`
    return initialHTML;
};

function HTMLEnd() {
    let endHTML = `</div>
    </section>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>`
    return endHTML;
};