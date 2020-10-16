
<p align="center">
<img width="360" alt="astronaut eating burger" src="https://user-images.githubusercontent.com/68626350/96198398-92fb5800-0f09-11eb-85be-a8272957f955.png">
</p>


# BurgerNaut

![Contents](https://img.shields.io/github/languages/top/dan-gentile/burgernaut)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/burgernaut)
![License](https://img.shields.io/github/license/dan-gentile/burgernaut)

## Description 

![ezgif com-gif-maker](https://user-images.githubusercontent.com/68626350/96203217-276bb780-0f16-11eb-8aad-3456d662ae8c.gif)


BurgerNaut is a Full Stack, CRUD web application that allows the user to input a burger they'd like to eat, then eat it and then throw it in the trash. The server is built using node, express and handlebars(for templating) and custom built ORMs. The database is built using MySQL and front end Javascipt using jQuery. Styling with CSS. This app is fully mobile responsive.

Check it out! <https://burgernaut.herokuapp.com/>

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Technologies](#technologies)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Screen Shots](#screenshots)
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


## Screen Shots

<p align="center">
-- Landing Page -- <br>
<img width="621" alt="Screen Shot 2020-10-15 at 5 19 01 PM" src="https://user-images.githubusercontent.com/68626350/96202882-474eab80-0f15-11eb-8355-6fed380351f2.png">
</p>
<p align="center">
-- Full Rendered -- <br>
<img width="1208" alt="Screen Shot 2020-10-15 at 5 19 22 PM" src="https://user-images.githubusercontent.com/68626350/96202931-7402c300-0f15-11eb-8d9a-0f523bca3bfe.png">
</p>
<p align="center">
-- Mobile --    <br>
<img width="375" alt="Screen Shot 2020-10-15 at 6 28 46 PM" src="https://user-images.githubusercontent.com/68626350/96202965-854bcf80-0f15-11eb-8c95-732d8b759b8c.png">
</p>

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