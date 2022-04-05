# Full Stack DEV – Product catalog

## User Stories

# 1. As a user, I want to view the list of products, so that I can have an overview of all the available catalog

Given there are no products available in the catalog
When I navigate to the products list page
Then a friendly message should inform the user

Given some products
When I navigate to the products list page
Then it should be possible to view the product available in the catalog

Note: neither pagination nor sorting is required

Given some products
When I’m looking at their list
Then it should be possible to view for each item at least:
- Name
- Short description (optional)
- Quantity available

# 2. As a user, I want to add a new product to the catalog.

Given I’m on the list page
When I want to add a new product
Then it should be possible to use a specific action on the UI

Given I’m adding a new item
When I’m inserting the product information
Then it should be possible to insert the following fields:
- Name
- Short description (optional)
- Quantity available

Given I’ve inserted the product information
When I want to confirm the operation
Then it should be possible to use a specific action on the UI

Given I’m viewing the products list page
When someone added a new product
Then it should be possible to view it without manually refreshing the page or the list

Given I’m adding a new product
When a product with the same name already exists
Then the operation should fail
And a user-friendly message should be shown
Additional notes
- When choosing the implementation, please consider that the same data will be consumed by multiple consumers (such as mobile, connected TVs, game consoles)
- Avoid using a real database storage; the list of products can be kept in memory but keep it open for future extension
- C# and .NET (Core or Full Framework) are the language of choice for the server parts. Frontend application should be a SPA (Angular, React, Vue.js).
- Error handling should be performed both on Client and Server side
- The artifact must be a .zip package containing the source code of the implementation and any additional file you consider helpful to understand the code and the algorithms implemented