# Front-end Folder Structure Conventions

A well-organized folder structure is essential for maintaining a clean and scalable codebase in a React TypeScript project. Below is a suggested folder structure with brief descriptions for each directory:

## Project Root

- `src/`: Contains all the source code of the project.

## Source Code

- `assets/`: Holds static assets such as images, fonts, and styles.

- `components/`: Reusable and modular React components.
- `constants/`: Constants and configuration files used throughout the application.

- `hocs/`: Higher-order components (HOCs) that enhance the functionality of other components.

- `hooks/`: Custom React hooks that encapsulate and reuse component logic.

- `layouts/`: Layout components that define the overall structure of different pages or sections.

- `libs/`: Holds external libraries for resource and configuration management.

- `pages/`: Top-level components representing different pages of the application.

- `router/`: Configuration and setup for the React Router.

- `services/`: API services and utility functions for handling data fetching and business logic.

- `stores/`: Global state management using **`Zustand`** library.

- `types/`: TypeScript type definitions used throughout the application.

- `utils/`: General utility functions used across the project.

## Documentation

- `docs/`: Project documentation

## Build Output

- `build/`: THe compiled and optimized of the application

## Miscellaneous

- `.gitignore`: Specifies intentionally untracked files to be ignored by Git.

- `.eslintignore` and `.eslintrc.js`: Configuration files for ESLint.

- `.prettierignore` and `.prettierrc`: Configuration files for Prettier.

## Conventions

- **Export via index.ts**: use an _`index.ts`_ file in the component folder to export the component. This can simplify imports in other parts of the application.
- **Avoid business logic in components**: Keep components focused on rendering UI and handling user interactions.
- **Import component**: All components from other locations must be imported from the `components` folder."
- **Import third-party libraries**: All third-party libraries must be imported and configured from the `libs` folder
