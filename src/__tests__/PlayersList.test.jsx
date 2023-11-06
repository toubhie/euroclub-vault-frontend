import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlayersList from '../pages/PlayersList';
import {
  getAllPlayers,
  createPlayer,
  deletePlayer,
} from '../api/apis';
import { SnackbarProvider } from "notistack"

jest.mock('../api/apis', () => ({
  getAllPlayers: jest.fn(),
  createPlayer: jest.fn(),
  deletePlayer: jest.fn(),
}));

describe('PlayersList Component', () => {

  const samplePlayer = {
    id: 1,
    fullname: 'John Doe',
    club: 'Sample Club',
    position: 'Left Winger',
    nationality: 'England',
    age: 25,
    player_value: 1000000,
  };

  beforeEach(() => {
    getAllPlayers.mockReset();
    createPlayer.mockReset();
    deletePlayer.mockReset();
  });

  test('Renders the PlayersList component', async () => {
   
    getAllPlayers.mockResolvedValue({ data: [samplePlayer] });

    render(
        <SnackbarProvider>
            <PlayersList />
        </SnackbarProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('All Players')).toBeInTheDocument();
      expect(screen.getByText('Create Player')).toBeInTheDocument();
    });
  });

//   test('Creates a new player', async () => {
//     render(
//         <SnackbarProvider>
//             <PlayersList />
//         </SnackbarProvider>
//     );

//     const player = {
//         id: 1,
//         fullname: 'John Doe',
//         club: 'Example FC',
//         position: 'Center Forward',
//         nationality: 'France',
//         age: 25,
//         player_value: 1000000,
//       };

//     // Mock the createPlayer function to return the player object
//   createPlayer.mockResolvedValue({ data: player });

//   // Find and click the "Create Player" button
//   const createPlayerButton = screen.getByText('Create Player');
//   fireEvent.click(createPlayerButton);

//   // Simulate filling in form fields
//   const fullnameInput = screen.getByLabelText('Full name');
//   const clubInput = screen.getByLabelText('Club');
//   const nationalityInput = screen.getByLabelText('Nationality');
//   const positionInput = screen.getByLabelText('Player position');
//   const ageInput = screen.getByLabelText('Age');
//   const playerValueInput = screen.getByLabelText('Player value');

//   fireEvent.change(fullnameInput, { target: { value: 'John Doe' } });
//   fireEvent.change(clubInput, { target: { value: 'Example FC' } });
//   fireEvent.change(positionInput, { target: { value: 'Center Forward' } });
//   fireEvent.change(ageInput, { target: { value: '23' } });
//   fireEvent.change(nationalityInput, { target: { value: 'Nigeria' } });
//   fireEvent.change(playerValueInput, { target: { value: '100000' } });

//   // Submit the form
//   const submitButton = screen.getByText('Add Player'); // You should adjust this text based on your component
//   fireEvent.click(submitButton);

//   // Wait for the success message
//   const successMessage = await screen.findByText('Player created successfully');
//   expect(successMessage).toBeInTheDocument();

//   });

});
