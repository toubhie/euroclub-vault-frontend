
![Logo](https://i.ibb.co/smP8gBr/Screenshot-2023-11-06-at-14-52-11.png)


# EuroClub Vault (Frontend)

The EuroClub Vault application's frontend, developed using React and TypeScript, offers an intuitive user interface featuring React components for modularity and ease of maintenance. It includes forms for entering and editing player information, handled efficiently through libraries like Formik. The DataGrid from Material-UI enables dynamic player list management with sorting and filtering capabilities. React's state management controls sorting, filtering, and modal dialogs for player management. Snackbar notifications, powered by the Notistack library, provide real-time feedback on actions such as creating or updating player profiles. The frontend communicates with the backend via API requests, integrates third-party services like Wikipedia for data enrichment, and offers features for user interaction, including player creation, editing, and deletion, as well as filtering and sorting options. In summary, the React-based frontend enhances user interaction, data management, and presentation, making it a crucial part of the Euroclub Vault application.
 
## Features

**1) Creating a New Player:** Users can input player information such as full name, club, nationality, age, player value, and position via a user-friendly form. Upon submission, this data is sent to the backend for storage, and a success notification is displayed to confirm the creation of the player profile.

**2) Updating Player Information:** Users have the ability to edit and update existing player profiles. They can access the player's details, make changes to any field, and save the updated information. After successful submission, the backend stores the modifications, and a notification is shown to inform users that the player's information has been updated.

**3) Deleting a Player:** The application allows users to remove player profiles from the system. By selecting a player and confirming the deletion action, the player's data is permanently removed from the backend. A confirmation message is displayed to indicate the successful deletion of the player.

**4) Sorting and Filtering:** Users can organize the displayed list of players by sorting in ascending or descending order based on full names. Additionally, they can filter the list based on player positions. This feature provides flexibility in quickly finding specific players or arranging them in a preferred order.

**5) Viewing Player Details::** Users can access detailed player information, including full name, club, nationality, position, player value, and creation date. This feature allows users to explore additional data enrichment from Wikipedia, such as the player's biography and an image.


## Pre-requisites

- Make sure Node and NPM are installed and their PATHs defined. You can download NodeJS from [here](https://nodejs.org/en/).


## Contributing

Contributions are always welcome! Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

To fork this Project
- Create your Feature Branch (git checkout -b feature/NewFeature)
- Commit your Changes (git commit -m 'Added some new feature')
- Push to the Branch (git push origin feature/NewFeature)
- Open a Pull Request

## Technologies Used
- NodeJS (v 16.13.0)
- React
- Typescript
- Jest
- React Testing Library



## Run Locally

Clone the project

```bash
  git clone https://github.com/toubhie/performativ-frontend.git
```

Go to the project directory

```bash
  cd performativ-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Screenshots

![App Screenshot](https://i.ibb.co/TvRDF3X/Screenshot-2023-11-06-at-15-20-38.png)

![App Screenshot](https://i.ibb.co/WDzcsRK/Screenshot-2023-11-06-at-15-20-46.png)


## Authors

- [Tobiloba Williams](https://github.com/toubhie)

