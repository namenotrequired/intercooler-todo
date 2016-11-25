# Introduction

This todo list was built to get to know [intercooler.js](https://github.com/LeadDyno/intercooler-js).

Intercooler forms the AJAX request on the client, which is responded to by the NodeJS server using:

- Express
- Handlebars

### Feel free to clone it, run it locally, and try it out or just nose around in the source code!

No login, no database, no security features, just the bare bones to get to know the stack a little.

## Conclusions

Having got my feet wet with intercooler on this little project, I mostly like the way it works.

The simplicity of it is great, and so is the effectiveness. Going against the client-side rendering that React, Angular, Vue et al are 
all doing, in Intercooler everything is simply an AJAX request, and I return the fully formed HTML from the server. I can code everything 
in my cozy controllable own server environment and know it works, which is a great plus.

The attributes method is a little strange to get used to. I'm used to reading and writing more imperative code. I doubt the attributes
count as declarative exactly, but it takes some getting used to regardless if you were always just writing JavaScript.
