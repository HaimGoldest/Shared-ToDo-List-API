# Shared-ToDo-list-API
> Backend of the [Shared-ToDo-list-App](https://github.com/HaimGoldest/Shared-ToDo-List-App)


## Table of Contents:
- [Installation On Local Machine](#installation-on-local-machine)
  
- [Design Decisions and Patterns Used in the Backend](#design-decisions-and-patterns-used-in-the-backend)
  - [Layered Architecture](#layered-architecture)
  - [Repository Pattern](#repository-pattern)
  - [Singleton Pattern](#singleton-pattern)
  - [Factory Pattern](#factory-pattern)
  - [Middleware for Cross-Cutting Concerns](#middleware-for-cross-cutting-concerns)
  - [WebSocket Integration for Real-Time Updates](#websocket-integration-for-real-time-updates)
  - [Token-Based Authentication](#token-based-authentication)
  - [Cloud Database](#cloud-database)


## Installation On Local Machine
1. Navigate in Console/CMD to the desired location and clone the repository:

```bash
git clone https://github.com/HaimGoldest/Shared-ToDo-List-API.git
```

2. Open the Shared-ToDo-List-API folder:

```bash
cd Shared-ToDo-List-API
```

3. Install dependencies:

```bash
npm install
```

4. Build and Run the Server Locally:

```bash
npm start
```

> [!IMPORTANT]
> __Verify your port 3000 is free! (or change the port in the code)__


## Design Decisions and Patterns Used in the Backend

### Layered Architecture
The backend is organized into distinct layers:
* Routes: Define the API endpoints and handle HTTP requests.
* Controllers: Handle business logic and delegate tasks to repositories or utilities.
* Repositories: Abstract database interactions, enabling separation of concerns and maintainability.
* Utilities: Provide shared helper functions.
This structure improves modularity and makes the code easier to extend or modify
 
### Repository Pattern
Centralizes all database queries for each entity, keeping controllers clean and focused on business logic.
This abstraction reduces redundancy and simplifies testing, as repositories can be mocked for unit tests.

### Singleton Pattern
Ensures only a single instance of the Socket.IO server exists across the application.
This avoids duplicate WebSocket server instances and ensures all clients are connected to the same Socket.IO instance.

### Factory Pattern
Centralizes the creation of structured WebSocket event objects for consistency.
This reduces repetitive logic when emitting events and ensures uniformity in event structures.

### Middleware for Cross-Cutting Concerns
Handles reusable concerns like authentication and input validation.
This ensures consistent behavior across routes and avoids redundant code in controllers.
* Using __"express-validator" package__ for routes and user inputs validations.

### WebSocket Integration for Real-Time Updates
Provides real-time task updates across all connected clients.
This avoids duplicate WebSocket server instances and ensures all clients are connected to the same Socket.IO instance.

### Token-Based Authentication
Centralizes the creation of structured WebSocket event objects for consistency.
This design improves user experience by enabling real-time task synchronization.

### Cloud Database
Leveraging __MongoDB-Atlas__ provides a centralized, pre-configured database solution for all clients, eliminating individual database setup requirements.
