# MERN Slot Booker App

The MERN Slot Booker App is a full-stack web application that allows users to book appointments for available time slots. Users can select a date from the calendar, choose a time slot, and book an appointment. The app provides an interactive calendar view, a list of available time slots, booking functionality, and the ability to delete booked appointments.

## [Live Link for the Project](https://slotbookie.netlify.app/)
```bash
https://slotbookie.netlify.app/
```

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive calendar view for selecting appointment dates.
- List of available time slots for each selected date.
- Booking and deleting appointments with confirmation.
- Highlighting of selected date on the calendar.
- Persistent data storage using MongoDB.
- Backend API built using Node.js and Express.
- Frontend built with React.js.
- User authentication for secure access.

## Getting Started

### Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Ruthvik3113/MERN-Slot-Booking.git
```
### Change the Project Directory

```bash
cd mern-slot-booker
```
### Install server Dependencies
```bash
cd server
npm install
```
### Install Client Dependencies
```bash
cd ../client
npm install
```

## Usage
Start the MongoDB server.

Start the backend server:

```bash
cd server
npm start
```
Start the frontend development server
```bash
cd ../client
npm start
```
Open your web browser and navigate to http://localhost:3000 to use the app.

Select a date from the calendar to see available time slots.

Click on a time slot to choose and book an appointment.

To delete a booked appointment, click on the appointment card.

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- react-big-calendar library
- moment.js
- Tailwind CSS

## Contributing
Contributions are welcome! If you find a bug or want to add a new feature, feel free to submit a pull request.

- Fork the repository.
- Create a new branch for your feature or bug fix: git checkout -b feature-name
- Make your changes and commit them: git commit -am 'Add some feature'
- Push to the branch: git push origin feature-name
- Create a new Pull Request.
## License
This project is licensed under the MIT License.
