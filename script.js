const unpuffdCard = document.querySelector('.unpuffd');
const techBlogCard = document.querySelector('.tech-blog');
const muvdCard = document.querySelector('.muvd');
const noteTakerCard = document.querySelector('.note-taker');

unpuffdCard.addEventListener("mouseover", function (event) {
    const unpuffdText1 = document.createElement("p")
    unpuffdText1.textContent = "An application inspired by Untappd that allows people to learn about and review cannabis, if of legal age."
    unpuffdText1.classList.add('unpuffd-text')

    const unpuffdText2 = document.createElement("p")
    unpuffdText2.textContent = "This application utilizes Node.JS, Express, Dotenv, Handlebars, bcrypt, MySQL, and Sequelize."
    unpuffdText2.classList.add('unpuffd-text')

    setTimeout(function () {
        if (window.matchMedia('(max-width: 970px)').matches) {
            unpuffdCard.appendChild(unpuffdText1);
        } else {
            unpuffdCard.appendChild(unpuffdText1);
            unpuffdCard.appendChild(unpuffdText2);
        }

        if (window.matchMedia('(max-width: 815px)').matches) {
            unpuffdText1.remove()
        } 
    }, 500);


    unpuffdCard.addEventListener("mouseout", function (event) {
        unpuffdText1.textContent = ""
        unpuffdText2.textContent = ""
    })
})

techBlogCard.addEventListener("mouseover", function (event) {
    const techblogText1 = document.createElement("p")
    techblogText1.textContent = "A CMS-style blog where developers can create blog posts and comment on other developers' posts."
    techblogText1.classList.add('techblog-text')

    const techblogText2 = document.createElement("p")
    techblogText2.textContent = "This application uses Handlebars.js, Sequelize, and express-session npm for authentication."
    techblogText2.classList.add('techblog-text')

    setTimeout(function () {
        if (window.matchMedia('(max-width: 970px)').matches) {
            techBlogCard.appendChild(techblogText1);
        } else {
            techBlogCard.appendChild(techblogText1);
            techBlogCard.appendChild(techblogText2);
        }

        if (window.matchMedia('(max-width: 815px)').matches) {
            techblogText1.remove()
        }
    }, 500);

    techBlogCard.addEventListener("mouseout", function (event) {
        techblogText1.textContent = ""
        techblogText2.textContent = ""
    })
})

muvdCard.addEventListener("mouseover", function (event) {
    const muvdText1 = document.createElement("p")
    muvdText1.textContent = "Muvd is an application that allows users to search for movies, or suggests movies based on the user's mood."
    muvdText1.classList.add('muvd-text')

    const muvdText2 = document.createElement("p")
    muvdText2.textContent = "This is an HTML, CSS, JavaScript application and uses API calls from The Movie Database and The New York Times."
    muvdText2.classList.add('muvd-text')

    setTimeout(function () {
        if (window.matchMedia('(max-width: 970px)').matches) {
            muvdCard.appendChild(muvdText1);
        } else {
            muvdCard.appendChild(muvdText1);
            muvdCard.appendChild(muvdText2);
        }

        if (window.matchMedia('(max-width: 815px)').matches) {
            muvdText1.remove()
        }
    }, 500);

    muvdCard.addEventListener("mouseout", function (event) {
        muvdText1.textContent = ""
        muvdText2.textContent = ""
    })
})

noteTakerCard.addEventListener("mouseover", function (event) {
    const notetakerText1 = document.createElement("p")
    notetakerText1.textContent = "An application where a user is able to write and save notes to more efficiently organize and keep track of thoughts and tasks."
    notetakerText1.classList.add('muvd-text')

    const notetakerText2 = document.createElement("p")
    notetakerText2.textContent = "This application uses Express.js to retrieve notes saved into a created database."
    notetakerText2.classList.add('muvd-text')

    setTimeout(function () {
        if (window.matchMedia('(max-width: 970px)').matches) {
            noteTakerCard.appendChild(notetakerText1);
        } else {
            noteTakerCard.appendChild(notetakerText1);
            noteTakerCard.appendChild(notetakerText2);
        }

        if (window.matchMedia('(max-width: 815px)').matches) {
            notetakerText1.remove()
        }
    }, 500);

    noteTakerCard.addEventListener("mouseout", function (event) {
        notetakerText1.textContent = ""
        notetakerText2.textContent = ""
    })
})