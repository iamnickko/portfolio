"use client";
import SectionWrapper from "../UI/SectionWrapper";
import ProjectCard from "./UI/ProjectCard";
import TodolistBody from "./todolist/TodolistBody";
import MoviesIWatchedBody from "./moviesiwatched/MoviesIWatchedBody";
import SectionTitle from "../UI/SectionH2";
import ExpenseTrackerBody from "./expensetracker/ExpenseTrackerBody";

export default function Projects() {
  return (
    <SectionWrapper color="bg-dark">
      <SectionTitle>Projects</SectionTitle>
      <ProjectCard
        src="/todolist.jpg"
        title="ToDoList"
        tech="React, Context, React Router, Framer Motion, Firebase."
        body={<TodolistBody />}
        demoUrl="https://todolist-react-ac633.web.app/"
        codeUrl="https://github.com/iamnickko/todolist"
        reverse={false}
      />
      <ProjectCard
        src="/moviesiwatched.jpg"
        title="MoviesIWatched"
        tech="Node, React, Express, MongoDB, Vercel, Render"
        body={<MoviesIWatchedBody />}
        demoUrl="https://moviesiwatched.vercel.app/"
        codeUrl="https://github.com/iamnickko/moviesiwatched"
        reverse={true}
      />
      <ProjectCard
        src="/expenseTracker.jpg"
        title="ExpenseTracker"
        tech="React, Reacter Router, Tailwind CSS, Vercel"
        body={<ExpenseTrackerBody />}
        demoUrl="https://expensetracker-nine-ashy.vercel.app/"
        codeUrl="https://github.com/iamnickko/expensetracker"
        reverse={false}
      />
      
    </SectionWrapper>
  );
}
