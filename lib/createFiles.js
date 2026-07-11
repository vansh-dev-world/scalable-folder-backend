import fs from 'fs'
import path from 'path'
import {fileURLToPath } from 'url'

const __dirname=path.dirname(fileURLToPath(import.meta.url));

const templatePath=path.join(__dirname,'../templates/express');

export const createFile=(projectMainPath,projectPath)=>{
  //.env
  fs.copyFileSync(path.join(templatePath,'.env'),path.join(projectPath,'.env'));
  
  //.gitignore
fs.copyFileSync(path.join(templatePath,'gitignore'),path.join(projectPath,'gitignore'))

fs.copyFileSync(path.join(templatePath,'app.js'),path.join(projectMainPath,'app.js'))

//server.js
fs.copyFileSync(path.join(templatePath,'server.js'),path.join(projectMainPath,'server.js'))
  
}
