# PulseQ - Week 1 (Task List)

This is **Week 1 task** of the PulseQ project. The goal is to create a simple **Angular application** that displays a list of tasks using static data, with the ability to toggle their status (UI only).

---

## 🚀 Project Setup

Follow these steps to run the project locally:

1. **Install Angular CLI v17**
```bash
npm install -g @angular/cli@17
```
2. **Clone the repository**

```bash
git clone https://github.com/shamaiem10/PulseQ-W1.git
cd PulseQ-W1
```

3. **Install dependencies**

```bash
npm install
```

4. ** Run the project**

```bash
ng serve
```

```bash
Open your browser at http://localhost:4200/ to see the application.
```

📂 Folder Structure
```bash
PulseQ-W1/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Navbar component
│   │   │   ├── task-list/       # Task List component
│   │   │   └── task-card/       # Task Card component
│   │   ├── app-routing.module.ts # Routing setup
│   │   └── app.module.ts        # Angular root module
│   ├── assets/                  # Static assets (images, icons)
│   └── index.html               # Main HTML entry
├── angular.json                 # Angular project configuration
├── package.json                 # Project dependencies
└── README.md                    # Project setup & overview
```


 - components/:Contains all UI components for the app.

 - task-list/: Displays the list of tasks using static data.

 - task-card/: Represents individual tasks (title, description, status, toggle button).

 - navbar/: Top navigation bar for the app.

All data lives inside components; no services or backend are used yet.

📝 Features

 - Display tasks with Title, Description, and Status (Pending / Completed)

 - Toggle button to change task status (UI only)

 - Routing enabled in Angular project

🎥 Demo & Screenshots

You can view a working demo of this project here:


![Setup](https://github.com/shamaiem10/PulseQ-W1/blob/main/CLI-SS1.png)


![Setup](https://github.com/shamaiem10/PulseQ-W1/blob/main/CLI-SS2.png)


![Setup](https://github.com/shamaiem10/PulseQ-W1/blob/main/ProjectStartup.png)
