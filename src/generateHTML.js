const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

function createEmployee(employees) {
    var htmlCard = ''
    employees.forEach(element => {
        switch (element.getRole()) {
            case 'Manager':
                htmlCard += `
                <div class="card col-sm-6 col-md-4 col-lg-3">
                    <div class="card-header">
                        <h2>${element.getName()}</h2>
                        <h3>Manager <i class="bi bi-diagram-3"></i></h3>
                    </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${element.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                  <li class="list-group-item">Office Number: ${element.getOffice()}</li>
                </ul>
              </div>
              `
                break;

            case 'Engineer':
                htmlCard += `
                <div class="card col-sm-6 col-md-4 col-lg-3">
                    <div class="card-header">
                        <h2>${element.getName()}</h2>
                        <h3>Engineer <i class="bi bi-tools"></i></h3>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${element.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                            <li class="list-group-item">GithubProfile: <a href="https://github.com/${element.getGitHub()}" target="_blank">${element.getGitHub()}</a></li>
                    </ul>
                </div>`
                break;

            case 'Intern':
                htmlCard += `
                <div class="card col-sm-6 col-md-4 col-lg-3">
                    <div class="card-header">
                        <h2>${element.getName()}</h2>
                        <h3>Intern <i class="bi bi-pencil"></i></h3>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${element.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                            <li class="list-group-item">School: ${element.getSchool()}</li>
                    </ul>
                </div>`
                break;
        }
    });
    return htmlCard;
}

function generateHTML(employees) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
    <div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
        </div>
    </div>
</div>
        <div class="container-fluid">
    
            <div class="row">
            ${createEmployee(employees)}
            </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        </body>
        </html>
            `
}

module.exports = generateHTML;