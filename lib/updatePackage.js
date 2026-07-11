import fs from 'fs'
import path from 'path'
export const createPackages=(projectPath,projectName,version)=>{
       const pkg={
         name:projectName,
         version,
         type:"module",
         scripts:{
            dev:"node --watch src/server.js",
            start:"node src/server.js"
         },
         

       }


       fs.writeFileSync(path.join(projectPath,'package.json'),
    JSON.stringify(pkg,null,4))
       
}