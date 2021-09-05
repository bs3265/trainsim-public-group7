# Train Sim - Group 7

A work-in-progress application to simulate purchasing train tickets. This project is used for an assignment of SE 577 at Drexel University.

### Project Details: 

- [User Scenarios](https://docs.google.com/document/d/17qXcQV29qGFcG-WD5if1wZUmjGl9ywvFJMxEpQ1JR8Y/edit)
- [Technology Stack](https://docs.google.com/document/d/17qXcQV29qGFcG-WD5if1wZUmjGl9ywvFJMxEpQ1JR8Y/edit)
- [Database Schema](https://dbdiagram.io/d/60df44220b1d8a6d39649bfa)
- [Template Repository](https://github.com/jlefever/trainsim-public)

### Group Members

| Name          | Role                                     |
|---------------|------------------------------------------|
| Grace Que     | Architect                                |
| Courtney Finn | Developer                                |
| Brian Song    | Developer                                |
| Steve Hurlock | Tester, Admin                            |

### Plan and Progress

Our initial plan was to translate the requirements into a set of features, required and optional, in as GitHub issues.  We started with a spreadsheet of the features and went through the provided design to determine the issues that existed with the code.  We decided the priority of the features & issues and our team members took up those issues.  Our architect created the documentation for the design including the component, sequence, and class diagrams for the system.

We have been able to expand on the functionality of the system, but there are still many aspects that we did not have time to complete.  We discuss the issues we encountered in the next section.

- [x] Scenario 3.1.1 - Search Tickets Scenario -- added Round Trip functionality
- [ ] Scenario 3.1.2 - Check Details Scenario
- [ ] Scenario 3.1.3 - Add to Cart Scenario
- [x] Scenario 3.1.4 - Enter Traveler Info Scenario - Completed
- [x] Scenario 3.1.5 - Enter Payment Info Scenario - Completed, added paypal integration
- [x] Scenario 3.1.6 - Check Out Scenario - Completed 
- [ ] Scenario 3.1.7 - Check Out (Guest) Scenario - Completed?
- [x] Scenario 3.1.8 - Check Out (Signed-In User) Scenario - Completed
- [ ] Scenario 3.1.9 - Sign In Scenario - Completed (provided)
- [ ] Scenario 3.1.10 - View Order History Scenario
- [ ] Scenario 3.2.11 - Request Refund *Optional* Scenario
- [ ] Scenario 3.2.12 - Browse Destinations *Optional* Scenario
- [ ] Scenario 3.2.13 - View Map of Destinations *Optional* Scenario
- [ ] Scenario 3.2.14 - View Attractions *Optional* Scenario
- [ ] Scenario 4.1.1 - Manage Customers Info Scenario - In Progress
- [ ] Scenario 4.1.2 - Manage Customer Orders Scenario - In Progress
- [ ] Scenario 4.2.3 - Admin Adds Customer Order Scenario
- [ ] Scenario 4.2.4 - Display Dashboards *Optional* Scenario
- [ ] Scenario 4.2.5 - Handle Refund Requests *Optional* Scenario


### Lesson Learned and Suggestions for Future Classes

Our group met often to discuss what was required for the assignment and we quickly had the sample framework up and running.  

There were a few things that made this group assignment difficult for our team.  Although having a framework and working example to start with seems helpful, we struggled with several aspects of the project

1. The first was that our team members did not have experience with javascript, TypeScript,and frontend programming in general since we have all work on backend systems.  We spent a lot of time understanding what was happening in the front end code even though the functionality of the UI was fairly straight forward.
2. The second, and most important, was starting with a working version that accomplished many of the major features, seems helpful but in the end, we felt like we were constantly reverse engineering the solution instead of architecting the solution ourselves.  However, it took us a while to get a grasp on the provided framework to realize this.  An initial walk through of the design and code would have been very helpful.  So by the time we had come up to speed on the design that was provided, we felt we needed to use what we had to make as much progress as possible.  However, what the provided framework really did was remove the ability for the team to iteratively create the solution and get momentum from working as a team to create the initial building blocks of the system.  We'll discuss this more in the Suggestions section below.  
3. Another feature that the provided framework was missing was a suite of tests for the functionality that was provided.  Writing tests while code is developed is best practice for several reasons, one of which is to help developers that inherit the code understand the work that has been done.  Another benefit is to provide the means for new features to quickly be added by showing when the added changes have unintended consequences on existing functionality.  Instead we got this:

    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue()  { assertTrue( true ); }


Those issues aside, overall, we ended up learning a lot about about javascript and splitting out microservices, but not as much about architecting a solution from the beginning.  

Suggestion: So we would like to humbly suggest another more iterative approach for the project:

We think the requirements for project could have been given to the groups much earlier in the class, say in the 2nd or 3rd week, once we had a grasp on the initial component and sequence diagrams.  The team, lead by the architect, could have written all of the features from the requirements and created the initial component and sequence diagrams, so the entire team had a strong understanding of what needed to be built.  The acceptance tests would be written up front for each of the features so we knew how we would know features are working correctly.  

Then we have could iteratively started implementing the backend part of the design.  Given our Java and Postgres experience from previous classes, we could have started with creating a single API and database table and then expanded that pattern to the other APIs per our design, adding them to docker containers and integrating with the other components of the system like Open Trip Planner, Stripe, etc. 

Once the backend system was in place with a robust test suite, the front end code could be added to provide the interface to the already functioning backend system.  Or the front end code could have been developed in parallel the back end code as the initial components were created.  Approaching the implementation in an iterative fashion would allow the team to build an initial set of webpages and get the momentum from those initial learnings that is expanded as more functionality is added.  The acceptance tests could also be expanded to interact with the UI using a tool like BDD/cucumber and Selenium.

For our team, we felt like we missed one of the key parts of architecting and designing the system, which is making the decisions about the design based on the requirements and the abilities of the team that will ultimately build and operate the system.  

## Getting Started

The following tools are required to build and run this project: Docker, Docker Compose, Maven, Java 11, and npm.

From the root of the project run:

```
mvn clean install
docker-compose up
```

You should then be able to visit https://localhost:8000/ in your browser. Ignore the certificate error and you will be greated with the homepage. (The certificate error happens because it is self-signed. It is not a concern because we are running locally.)

## Structure

This project contains four services, each with an associated Dockerfile. If you are new to Docker, check out this great [introduction](https://docs.docker.com/get-started/overview/).

### trainsim-db

This is a PostgreSQL database. The database contents are stored in the `data/` directory. Every script in the `scripts/` directory will be run on startup if the database doesn't exist yet. During development, the easiest way to make a change to delete `data/` and modify `scripts/000-init.sql`.

### trainsim-planner

This is an [OpenTripPlanner](https://www.opentripplanner.org/) server with SEPTA data. The `trainsim-planner/Dockerfile` does everything. You should not have to make any changes to this.

### trainsim-api

This is a Java web server. It uses trainsim-db and trainsim-planner to answer requests from the frontend. It is where most of the use cases will be implemented. We use a few small libraries to implement the server. Check `trainsim-api/pom.xml` for details.

### trainsim-client

This is the user interface of our application. It is written in [TypeScript](https://www.typescriptlang.org/) and uses [React](https://reactjs.org/) to render our views. We use [npm](https://www.npmjs.com/) to manage our dependencies and [webpack](https://webpack.js.org/) to build our project. Building the project (with `npm run build`) will result in a bundle of `.js` and `.html` being output to the `dist/` directory. We use [nginx](https://www.nginx.com/) to serve this `dist/` directory to the browser. The `nginx.conf` also configures nginx to forward any urls which start with `/api/` to trainsim-api. This allows the client to make requests to the api without using a different port.

If you are brand new to frontend development, here are some great resources for getting started:
- [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) - A great refresher or introduction to JavaScript
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - TypeScript gives JavaScript a type system that should feel much more like Java
- [React Hello World](https://reactjs.org/docs/hello-world.html) - Highly recommend reading through as much as this as you can if you are new to React

There are also great resources out there on npm, webpack, and nginx but you should not have to modify the configurations of these tools. (But it never hurts to get more familiar with the tools you are using.) We understand much of this may be brand new for many students in this class. Please do not hesistate to contact the TAs if you are having troubles with any of the above.

## Development

You can start the project at any time with `docker-compose up`.

To apply changes you have made to the backend, you could stop all services (with Ctrl + C) and start docker-compose again, but it may be easier to open a new shell and restart just the `trainsim-api` service by running `docker-compose restart trainsim-api`.

If you make any changes to the frontend, simply run `npm run build` to apply your changes. As an alternative to `npm run build`, you can use `npm run watch` (in a different shell from `docker-compose up`.) This will cause webpack to rebuild the frontend every time a file is saved. This can make for a more fluid development experience.

### Debugging

These directions are for Visual Studio Code but other IDEs should be similar.

#### Debugging trainsim-api

Because the application code is running in a docker container, it is slightly more invovled to debug the application. Modify the `MAVEN_OTPS` environment variable inside the `docker-compose.yml` file. You should see:

```
-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:1044
```

Change the `suspend=n` to `suspend=y`. This tells the Java runtime to pause until a remote debugger is attached. At runtime, it will wait for a connection on port `1044`. In VS Code add the following to your [launch.json](https://code.visualstudio.com/docs/editor/debugging):

```
{
    "type": "java",
    "name": "Attach to 'trainsim-api'",
    "request": "attach",
    "hostName": "localhost",
    "port": "1044",
    "sourcePaths": [
        "trainsim-api/"
    ]
}
```

Now set any breakpoints you would like and start the application with `docker-compose up` and attach the debugger by going to the "Run and Debug" tab of VS Code and running the "Attach to 'trainsim-api'" task.

#### Debugging trainsim-client

In VS Code add the following to your [launch.json](https://code.visualstudio.com/docs/editor/debugging):

```
{
    "name": "Launch `trainsim-client` in Chrome",
    "request": "launch",
    "type": "pwa-chrome",
    "url": "http://localhost:8000",
    "webRoot": "${workspaceFolder}/trainsim-client/"
}
```

Now set any breakpoints you would like and start the application with `docker-compose up`. Launch chrome by going to the "Run and Debug" tab of VS Code and running the "Launch 'trainsim-client' in Chrome" task. You may have to press `Ctrl + Shift + F5` to restart if your breakpoints are not being hit.

### Inspect Database

If you would like to use pgAdmin to inspect the database manually, you can run:

```
docker run --network="trainsim_default" -p 8080:80 -e "PGADMIN_DEFAULT_EMAIL=me@example.org" -e "PGADMIN_DEFAULT_PASSWORD=password" dpage/pgadmin4
```

Then navigate to http://localhost:8080/ and login with user "me@example.org" and password "password". Then right click "Servers" and select "Create > Server...". Enter "trainsim-db" as the name and then in the "Connection" tab, enter "trainsim-db", "5432", "user", and "password" as the Host, Port, Username and Password respectively. (I have had issues with this in the past. Contact the TAs if you cannot get it working.)
