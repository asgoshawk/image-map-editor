# Image Map Editor

### Introduction

This is a homework for the interview. The project is initialized with [Create React App](https://create-react-app.dev/) (CRA) and coded in TypeScript.

---

### Demo

![Demo](https://i.imgur.com/rnrzzH1.gif)

---

### Features & Technologies

- React
- TypeScript
- Styled-components
- [React-rnd](https://github.com/bokuweb/react-rnd)

---

### Requirements

The requirements are shown below:

#### Design Specifications

Figure 1:

<img src="./src/assets/q1.jpg" />

Figure 2:

<img src="./src/assets/q2.jpg" />

1. Implement a single-page React application that allows the user to upload an image of unlimited size from their local system. It should follow the design specifications described in Figure 1.
2. The uploaded picture should be displayed in the interactive image preview pane on the left side of the screen (see Figure 2). The picture should be scaled to a width of 355 px, and the height should be constrained by the original aspect ratio of the picture.
3. The user should be able to select any number of rectangular areas in the image preview pane, and the coordinates of the selected area _relative to the rendered size of the image itself_ should be displayed in a readable, indented, non-interactive format in the data preview pane (Figure 2, right).
4. The user should be able to delete each selection block using a hovering icon button similar to what is displayed in the sample image.
5. The user should be able to arbitrarily reposition and resize each selection block without exceeding the dimensions of the image preview.
6. The data preview panel should be updated with selection block coordinates after every addition, deletion, resizing, or repositioning.
7. Optional bonus: ensure each selection block cannot overlay another selection block.

Note: emulating the look and feel of the sample images is encouraged but the more important part is completing the functionality described above.

#### Technical Expectations

- Use TypeScript, React hooks, and functional components to develop the application.
- CRA should not emit any linting or type errors when the application is complete, but you can disable errors where appropriate.
- Using third party packages installed with `yarn` is welcome; you aren't required to (and probably shouldn’t) write everything from scratch, but we may ask about why you chose a particular approach.
- For CSS-in-JS we suggest (but do not require) using [Styled Components](https://styled-components.com/).
- Clean and readable code style is encouraged!

#### Git Workflow

- Please fork the `develop` branch to work on the application.
- When the application is ready for review open a pull request to `develop` branch using the template provided.
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) style to name your branch, commit(s), and pull request.
- Team members may leave some comments on your PR as code review; feel welcome to respond and interact there, or send a private message if you prefer.
