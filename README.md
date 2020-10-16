# BurgerNaut

![Contents](https://img.shields.io/github/languages/top/dan-gentile/burgernaut)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/burgernaut)
![License](https://img.shields.io/github/license/dan-gentile/burgernaut)

## Description 

<p align="center">
<img width="360" alt="astronaut eating burger" src="https://user-images.githubusercontent.com/68626350/96198398-92fb5800-0f09-11eb-85be-a8272957f955.png">
</p>

BurgerNaut is a Full Stack, CRUD web application that allows the user to input a burger they'd like to eat, then eat it and then throw it in the trash. The server is built using node, express and handlebars(for templating) and custom built ORMs. The database is built using MySQL and front end Javascipt using jQuery. Styling with CSS. 

Check it out! <https://burgernaut.herokuapp.com/>

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Technologies](#technologies)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Code Snippets](#code-snippets)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Technologies 

- [Node.js](https://nodejs.org/en/)
- [handlebars.js](https://handlebarsjs.com/)
- [Express.js](https://expressjs.com/)
- [MySql](https://www.mysql.com/)
- [JawsDB](https://www.jawsdb.com/)
- [jQuery](https://jquery.com/)

## Installation 

Nothing to install! To use the app please click on the link below! 

<https://burgernaut.herokuapp.com/>


## Code Snippets
Routing to update burger status
~~~
router.put("/api/burger/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.update({ eaten: req.body.eaten }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
~~~

## License 

This license is [MIT](https://github.com/dan-gentile/burgernaut/blob/master/LICENSE)

Copyright (c) 2020 Dan Gentile 

## Contributing 


1. Clone repo and create a new branch: 
~~~
$ git checkout -b name_for_new_branch.
~~~
2. Make changes and commit: 
~~~
$ git add . 
$ git commit -m "made changes"
~~~
3. Push to the branch:
~~~
$ git push
~~~
4. Submit Pull Request with comprehensive description of changes

## Questions 

If you have any questions and would like to get in touch please email me! 
email: dangentile@ymail.com