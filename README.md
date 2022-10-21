# React Meetup Demo Project

Based on a [udemy course](https://www.udemy.com/course/nextjs-react-the-complete-guide) on next.js.
This project demonstrates how to implement most of the typical features in a React app.

## Topics

Below some core concepts used in this project, detailed explanations are found in the corresponding code as comments.

### Routing

See comments in _App.js_ for how to implement routing with react. Note: next.js can do this much easier without manual work.

### 'Wrapper components'

See e.g. _Card.js_ that is reused throughout the project. Other components and html code can be passed as children to apply consistent styling.

### Input and handling form submission

See comments in _NewMeetupForm.js_ for how to create forms and provide own functions for handling events.
Introduces react useRef() to read user inputs.

Uses firebase as backend to submit inputs to database (see 'NewMeetup.js' for fetch request, and lesson 42 of course).

See other [tutorial](https://academind.com/tutorials/connect-to-database) for how to connect react with your own database.

### Fetching data

See _AllMeetups.js_ for how to use fetch(), dealing with asynchronous loading, displaying data using state. Practice idea: Could change code to use axios instead.

### React context

Manage application wide state. For more advanced use cases, see [redux](https://react-redux.js.org/) library.
See comments in _store/favorites_context.js_ for details on how to create a context and handler functions.
See _./meetups/MeetupItem.js_ for example how to use the context in a component.
