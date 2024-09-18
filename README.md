# Task Manager App - README

## Overview
This project is a Task Manager app that allows users to create, organize, and manage tasks by dragging them across different boards: "To Do", "In Progress", and "Done". It supports task prioritization, due dates, and persistent storage using the browser's local storage.

## Features
- Add new tasks with a title, due date, and priority (High, Medium, Low).
- Tasks can be moved between boards (To Do, In Progress, Done) using drag-and-drop.
- Task data is saved in localStorage, so the tasks persist even after refreshing or closing the browser.
- Responsive design that works on mobile and desktop screens.
- Delete tasks from any board.

## Technologies Used
- HTML, CSS for layout and styling.
- JavaScript for functionality, task management, drag-and-drop, and local storage interaction.
- LocalStorage API for saving tasks.

## How to Use
1. Adding a Task: Enter the task title, choose a due date, and select a priority (High, Medium, or Low). Then click "Add Task". The task will be added to the "To Do" board.
2. Managing Tasks: Drag and drop tasks between "To Do", "In Progress", and "Done" boards. Tasks will change background color based on their board.
3. Deleting a Task: Click the "Delete" button on any task to remove it.
4. Persistent Storage: Tasks are automatically saved in localStorage. When the page is reloaded, tasks will reappear in the appropriate boards.

## Code Breakdown

### HTML Structure (`index.html`)
The HTML file defines:
- A header (`Task Manager`) at the top.
- A task input section to add new tasks with title, due date, priority, and an "Add Task" button.
- Three boards: "To Do", "In Progress", and "Done", where tasks are displayed and managed.

### CSS Styling (`styles.css`)
The CSS file:
- Uses a simple and clean design with smooth transitions and box shadows.
- Provides responsive styles for mobile screens using media queries.
- Customizes task cards with color-coded backgrounds based on their board.
- Provides hover effects for task cards and buttons.

### JavaScript Functionality (`script.js`)
The JavaScript file:
- Handles adding new tasks, saving tasks in localStorage, and updating tasks when moved between boards.
- Implements **drag-and-drop** functionality for moving tasks between boards.
- Saves the tasks' positions (To Do, In Progress, Done) and task details (title, due date, priority) in localStorage for persistence across sessions.
- Allows for deleting tasks with a button click, and updates localStorage accordingly.

### Drag-and-Drop Functionality
Tasks can be dragged and dropped between boards:
- Drag: Tasks become semi-transparent while being dragged.
- Drop: Tasks change their background color based on the board they are dropped into.

### LocalStorage Usage
Tasks are saved in three separate localStorage keys for the "To Do", "In Progress", and "Done" boards. The tasks are loaded from localStorage when the page is loaded and saved back when tasks are added, moved, or deleted.

## Setup and Installation
1. Download or clone the repository.
2. Open the `index.html` file in any modern web browser.
3. Start managing tasks by adding, dragging, and deleting tasks.

## Project Enhancements
Future improvements could include:
- Adding task editing functionality.
- Adding task search or filtering options.
- Integrating task notifications or reminders for upcoming due dates.
