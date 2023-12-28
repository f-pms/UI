# PMS - Power Management System

[PMS]

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
  - [Team Members](#team-members)
  - [Dependencies](#dependencies)

## About

PMS is a group capstone project that serves as a solution for managing devices within the factory more efficiently and visually for FSC Company.

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

We're developing a user-friendly feature suite for seamless factory machinery monitoring, including real-time visualization and data reflection, powered by our Precision Monitoring System (PMS) receiving data from Siemens S7-200 PLCs.

### Alarm

Production parameter tables should contain changeable-color cell to reflect data

## Team Members

1. Bui Ngoc Huy
2. Nguyen Nhat Huy
3. Le Xuan Dai
4. Le Tien Thinh
5. Tran Trung Kien

## Dependencies

- Framework: [React](https://react.dev/)
- Routing handling: [react-router-dom](https://reactrouter.com/en/main)
- Form managing: [react-hook-form](https://react-hook-form.com/)
- UI framework: [MUI](https://mui.com/), [material-react-table](https://www.material-react-table.com/)
- Date libraries: [day-fns](https://date-fns.org/), [react-day-picker](https://react-day-picker.js.org/)
- State management: [zustand](https://github.com/pmndrs/zustand), [tanstack-query](https://tanstack.com/query/latest)
- API mocking: [mock-service-worker](https://mswjs.io/)
- UI components docs: [Storybook](https://storybook.js.org/)
- [axios](https://axios-http.com/)
- [lodash](https://lodash.com/)
  