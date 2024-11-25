const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete project report",
        taskDate: "2024-11-24",
        taskDeadline: "2024-11-30",
        taskDescription: "Prepare a detailed report on the project progress.",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team meeting preparation",
        taskDate: "2024-11-20",
        taskDeadline: "2024-11-20",
        taskDescription: "Organize slides for the team meeting.",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix login issue",
        taskDate: "2024-11-15",
        taskDeadline: "2024-11-16",
        taskDescription: "Resolve the bug causing login failures for users.",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update client database",
        taskDate: "2024-11-24",
        taskDeadline: "2024-12-01",
        taskDescription: "Add new entries and update outdated client details.",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit monthly report",
        taskDate: "2024-11-10",
        taskDeadline: "2024-11-12",
        taskDescription: "Compile and submit the monthly performance report.",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare training session",
        taskDate: "2024-11-24",
        taskDeadline: "2024-11-28",
        taskDescription: "Create materials for the upcoming training session.",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review team code",
        taskDate: "2024-11-23",
        taskDeadline: "2024-11-25",
        taskDescription: "Perform a code review and provide feedback.",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API documentation",
        taskDate: "2024-11-24",
        taskDeadline: "2024-12-01",
        taskDescription: "Document API endpoints and usage examples.",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Organize team outing",
        taskDate: "2024-11-01",
        taskDeadline: "2024-11-02",
        taskDescription: "Plan and coordinate a team outing event.",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design project mockups",
        taskDate: "2024-11-05",
        taskDeadline: "2024-11-10",
        taskDescription: "Create mockups for the new project design.",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Finalize project timeline",
        taskDate: "2024-11-24",
        taskDeadline: "2024-11-26",
        taskDescription:
          "Discuss and finalize the timeline for project deliverables.",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit bug fixes",
        taskDate: "2024-11-15",
        taskDeadline: "2024-11-20",
        taskDescription: "Submit resolved bugs to the repository for review.",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Draft newsletter",
        taskDate: "2024-11-24",
        taskDeadline: "2024-11-28",
        taskDescription: "Create content for the upcoming company newsletter.",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Analyze survey data",
        taskDate: "2024-11-10",
        taskDeadline: "2024-11-15",
        taskDescription: "Analyze feedback from the recent customer survey.",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare sales pitch",
        taskDate: "2024-11-24",
        taskDeadline: "2024-11-30",
        taskDescription:
          "Prepare and rehearse the sales pitch for potential clients.",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = localStorage.getItem("employees");
  const adminData = localStorage.getItem("admin");
  const empData = JSON.parse(employeesData);
  const adData = JSON.parse(adminData);
  return { empData, adData };
};
