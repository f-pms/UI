# PMS - Power Management System

[PMS].

## Table of Contents

- [PMS - Power Management System](#pms---power-management-system)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Storybook](#storybook)
  - [Features](#features)
    - [Monitoring](#monitoring)
    - [Alarm](#alarm)
    - [Report](#report)
    - [User Management](#user-management)
  - [Team Members](#team-members)
  - [Dependencies](#dependencies)

## About

The Web-Based Real-time Monitoring System offers a complete platform for factory operators to access real-time data, alarms, dynamic reports, and user-friendly interaction for monitoring energy consumption and production parameters at Kim Tin's MDF wooden board factory.


## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/f-pms/UI.git
cd UI
yarn
yarn dev
```

Visit <http://localhost:5173> in your browser to view the application.

### Storybook

```bash
 yarn storybook
```

Visit <http://localhost:6006> in your browser to view the application.

## Features

### Monitoring

- Ensuring a stable connection to the required PLC, handling a data stream of 500 - 600 parameters per second, and accurately displaying this information on the user interface. 
- Each factory station screen must display the associated electrical schematic diagram and its parameters correctly. 

### Alarm

- Allow users to create alarms to alert users of any unexpected events in the factory. 

- Must support two types of alarms, one to check existing conditions in the PLC before and one to check custom conditions created by the user without the need to add/modify the PLC logic.

### Report

- Developing a comprehensive reporting feature with table-format data and charts for efficient decision-making.

### User Management

- Creating a set of user management functions that enable different levels of access and control within the application. 

## Team Members

1. Bui Ngoc Huy
2. Nguyen Nhat Huy
3. Le Xuan Dai
4. Le Tien Thinh
5. Tran Trung Kien

## Dependencies

- Framework: [React](https://react.dev/)
- Routing handling: [React-router-dom](https://reactrouter.com/en/main)
- Form managing: [React-hook-form](https://react-hook-form.com/)
- UI framework: [MUI](https://mui.com/), [material-react-table](https://www.material-react-table.com/)
- Date libraries: [Day-fns](https://date-fns.org/), [react-day-picker](https://react-day-picker.js.org/)
- State management: [Zustand](https://github.com/pmndrs/zustand), [tanstack-query](https://tanstack.com/query/latest)
- API mocking: [Mock-service-worker](https://mswjs.io/)
- UI components docs: [Storybook](https://storybook.js.org/)
- [Axios](https://axios-http.com/)
- [Lodash](https://lodash.com/)
