function treeFn(dirPath)
{
    //let destPath
    if(dirPath== undefined)
    {
        treeHelper(process.cwd(),"");
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        {
            treeHelper(dirPath,"");
        }
        else{
            console.log("The path does not exist");
            return;
        }
    }
}
function treeHelper(dirPath,indent)
{ //Is file or folder
    let stats = fs.lstatSync(dirPath).isFile;
    if(isFile == true)
    {
        let fileName = path.basename(dirPath);
        console.log(indent+ "--" +fileName);
    }
    else{
        let dirName = path.basename(dirPath);
        console.log(indent+ "--" +dirName);
        let childrens = fs.readdirSync(dirPath);
        for(let i=0;i<childrens.length;i++)
        {
            let childPath = path.join(dirPath,childrens[i]);
            treeHelper(childPath,indent+"--");
        }
    }
}