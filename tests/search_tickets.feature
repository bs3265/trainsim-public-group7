Feature: Validate Search Tickets feature 3.1.1
The Customer will choose their source station, target station, departure date, from dropdown lists, and select “round trip” or “one way”. The website will return a list of itineraries that match the request.

Scenario Outline: Search for One Way tickets
Given I browse to the trainsim homepage 
When I select One-Way tab
And  I select "<Departure>"   under From
And  I select "<Destination>" under To
And  I select "<Date>"        under Depart
And  I select "<NumberTravelers>" under Travelers
And  I click "Find Trains" button
Then I should see "<Results>" Iterneraries listed


Examples: 
| Departure           | Destination  | Date     | NumberTravelers | Results |
| 30th Street Station | Overbrook    | TODAY    | 1               | 26      | 
| Ardmore             | Bryn Mawr    | TODAY    | 1               | 26      | 

Scenario Outline: Search for Round Trip tickets
Given I browse to the trainsim homepage 
When I select Route Trip tab
And  I select "<Departure>"   under From
And  I select "<Destination>" under To
And  I select "<Date>"        under Depart
And  I select "<NumberTravelers>" under Travelers
And  I click "Find Trains" button
Then I should see "<Results>" Itineraries listed
When I select I select a departure Intinerary
Then I should see "<Results>" Itineraries listed
When I select I select a return Intinerary
Then I should see the TravelerInfo page
 
Examples: 
| Departure           | Destination  | Date     | NumberTravelers | Results |
| 30th Street Station | Overbrook    | TODAY    | 1               | 26      | 
| Ardmore             | Bryn Mawr    | TODAY    | 1               | 26      | 
| 30th Street Station | Overbrook    | TODAY    | 2               | 26      | 
| Ardmore             | Bryn Mawr    | TODAY    | 2               | 26      | 



