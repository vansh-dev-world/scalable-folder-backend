import fs from 'fs';
import path from 'path';
import { createFolder } from './createFolders.js';
import { createPackages } from './updatePackage.js';
import { createFile } from './createFiles.js';
import { exec, execSync } from 'child_process';
export const createProject = (projectName) => {
    let projectPath = path.join(process.cwd(), projectName);
    if (fs.existsSync(projectPath)) {
        console.log("Project already exists")
        process.exit(1);
    }

    fs.mkdirSync(projectPath);
    createFolder(projectPath);
    console.log("✔ Creating folder structure")
    createPackages(projectPath, projectName, "1.0.0");
    console.log("✔ Generating package.json")
    const projctMainFile = projectPath + "/src"
    createFile(projctMainFile, projectPath)
    console.log("✔ Copying main files")
    execSync("npm i -D express cors dotenv", {
        cwd: projectPath,
        stdio: 'inherit'
    })

    console.log("✔ Installing dependencies")
    console.log("✅ Project created successfully!")

}