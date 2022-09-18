# React Typescript Sass Vite Template

This is a base Frontend Project Template using React, Typescript, Sass, and Vite for bundling.

# Requirements
Node Version 16.17

# Setup:
Note: This step can be skipped (as time was not spent diggin into the icy.tools API to understand how/where to pass the API Key)
 Rename `.env.dist` → `.env`
 Paste in your API Key

# To Launch a local webpage:

From the root of the project, run the following:

 `yarn install`
 `yarn dev` 

# Build for production:
Run the following:

 `yarn build`

 # Assessment Qustions:
● Handles user authentication - 
   ○ Would you need a database?
    > Using a database would be needed if user account info is required. Considering this is currently requiring Web3 wallet connection, as opposed to something like SSO, a database would probably be simplest way to track user account information and subscriptions. Further research would be done to determine best alternatives, use cases would also shape these design decisions.
   ○ Which one and what might the schema look like?
    > This would require further research
   ○ Are their pros/cons to a specific choice? (SQL vs NoSQL):
    > There can be pros/cons to either method... relational databases would definitely be able to handle this information, and would allow easier ways to protect/encrypt user data (from my current understanding of data security at least). NoSQL databases can be useful for storing larger objects.

● Serves data to the client via an API
  ○ What kind of API would you use?
    > An application like this definitely supports the argument for Server Side Rendering. With data that is common for all users, performing the query/rendering on the server and hosting it to each client definitely reduces the amount of queries and overall network traffic. This also allows for fine tuning server side when/why to update the query results being served.
    > On the server side, websockets or similar could be used to listen to when other monitors report significant changes have occurred (like ranking in the trending data query due to surge in volume).
    > As far as SOAP vs. REST, more research would have to be conducted to determine pros/cons of each, based on use cases and overall program requirements.

● Scales to handle thousands of requests per second
  ○ This could involve a lot of different optimizations, but what would you try first or what are the top three you might consider?
    > Correctly implementing Server Side Rendering for an application like this would definitely be first step in handling scalability of requests. Being able to control amount of requests to the same data/queries by serving the results to all users makes the most sense.
    > Building on a scalable architecture, like AWS or similar would help allow for spinning up/down servers depending on traffic.
    > To be honest, scalability is one of the aspects I know I lack experience with, and that I'm hoping to better be able to develop with my next career.

● Provides real-time updates to clients as new data is available
    > I have implemented and recognize uses for websockets for something like this... more research would need done to better understand implementing this for scalability.
    > If there are contract specific interactions/events, digging into and implementing contract event listeners might be applicable, again depending on ultimate use cases. (For instance I know OpenSea has contracts that help handle transactions, and if these have event broadcasters, they could be utilized to help inform on data updates).
