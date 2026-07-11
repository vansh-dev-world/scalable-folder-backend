#!/usr/bin/env node

import { createProject } from "../lib/createProject.js";

const projectName = process.argv[2];

if (!projectName) {
    console.log("Please provide project name");
    process.exit(1);
}

console.log("Creating project...")

createProject(projectName);