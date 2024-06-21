# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Blog-API
 Blog API, major project from The Odin Project (client end)

May 27 - June 2
- 
    * incorporate login ☑️ / signup / logout from the server
            - I think we're gonna use Passport’s JWT strategy.
            - Login / Signup page from React done. Now is the JWT logic

* May 27
    * date is now reformatted, public display of blog is done☑️

* May 28
    * routes in React now solved (finally) ☑️

* May 30
    * successfully logged-in on server side ☑️

* May 31
    * updated fetch POST in React. can log in now from client and reflect it on the server ☑️
    * still working on JWT logic
* can log in now from client and reflect it on the server

* June 1
    * login and redirect successful ☑️

June 3 - June 9
- 
    * incorporate login ☑️ / signup ☑️ / logout ☑️ from the server
            - We're gonna use Passport’s JWT strategy.
    * Write / Update / Delete from Admin is also done in React

* June 3
    * log-in / log-out from client side along with loading is smooth now ☑️
    * sign up next

* June 4-5
    * i just smoothen up the website. removed the clunkiness and stuff☑️

* June 6
    * sign up almost done☑️

* June 7
    * sign up in frontend is done (project 70% complete)☑️
    * admin interface is done (with write, delete, and update post buttons) ☑️
    * React Router for the /:id☑️


    * Blog Author /isAdmin page
    * jwt

* June 8
    * write-post page now ready
    * I think I will use TinyMCE for the text area (just the regular one, because TinyMCE will require API key)❌
    * write-post page all complete☑️

    * currently working on update and delete (almost finished)

* June 9
    * updating post is complete in React
    * deleting post is complete in React
        - I had a huge bug, and it was identified by using the localhost:3000/techy-blog/api page. I accidentally inputted a wrong data in the mongoDB using a previously wrong logic. Took me some time to figure that one out


June 10 - June 16
- 
    * Let's work on comments

* June 10
    * Should I work on the second website for the isAdmin? i did not ❌

    * Working on comments
        - Written my first comment ☑️
        - next thing to do is display it nicely

* June 11
    * can write and display comment now (initial)

* June 12
    * we should make comments render itself by not re-rendering the full website.
        - how do we do that?
            1. fetch the API call in the Comments component, not at the top. Make a fetch GET of the comments in the server.❌
                * tried this one but still needs to do api call from the top for default display.
            2. thinking if we can put the comments temporarily in a state? and then when it is time rendering the whole thing, it's gonna transfer to the top? ☑️
                * working on the date / timestamp. comments' date will come from React app. because other timestamps are written on the server

* June 14
    - grabe ang struggle ko sa date na ito sa number 2. pambihira
        - done. sa wakas
        - sobrang complex ng problem as in. dineclare ko sila pareho sa handleChange() function, which was I think medyo dull? But i achieved it.
    * i put the comment temporarily in a state, and then it displays temporarily (via the state) without rendering the whole component. it is a new thing to me, a groundbreaking thing that was done.
        - i struggled a lot here because of the errors in date, which points out to my error in setstate calls.
        - now it looks neat. but the code still needs a clean up.

June 17 - June 23
- 
    * linisin yung comments and other elements ☑️
    * delete comments☑️
    * comments done
    * progress 90%
    * JWT 

* June 17
    - comment section complete

* June 19
    * delete comments
        -   (ADMIN) hovering on the comment section and then show the delete button❌
            * I just showed up the button
    * comments done (progress 90%)
        - everything looks fine
        - only missing JWTS / publish - unpublish / some things to finalize the code
    
* June 20
    * working on publish / unpublish post

* June 21
    * separated the blog into 3 different components (Admin, Members, and public) ☑️
    * working on publish / unpublish post
        - this is already done, just fixing the logic ☑️

    * working on JWT 