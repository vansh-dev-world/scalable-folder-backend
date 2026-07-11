import fs from 'fs'
import path from 'path'
export const createFolder=(projectPath)=>{
   const folderStructure=[
    "src",
    "src/config",
    "src/modules",
    "src/infrastructure",
    "src/event",
    "src/database",
    "src/middleware",
    "src/shared",
    "src/socker",
    "src/sheduler",
    "src/docs",
    "src/test",
    "src/logs",
    "src/uploads",
    "src/scripts",
    
   ]

   folderStructure.forEach(folder=>{
    fs.mkdirSync(path.join(projectPath,folder),{
        recursive:true
    });
   })
}