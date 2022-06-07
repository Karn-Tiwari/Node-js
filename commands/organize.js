function organizeFn(dirPath)
{
    //console.log("organize command implemented for "+dirPath);
    // 1.input -> directory path given
    let destPath;
    if(dirPath==undefined){

    }
    else{

    }
    organizeHelper(dirPath,destPath);
    //3.Identify categories of all the files present in that input directory ->
    //4.copy/cut files to that organized directory inside of any of category folder

}
function organizeHelper(NODE_JS,dest)
{
    //3.identify categories of all the files present in that input directory
    let chilNames = fs.readdirSync(NODE_JS);
    //console.log(chilNames);
    for(int i = 0; i<childNames.length; i++)
    {
        let childAddress = path.join(NODE_JS,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile == true)
        {
          console.log(childNames[i]);
            //4.copy/cut files to that organized directory inside of any of category folder
            sendFiles(childAddress,dest,category)

        }
    }
}
function sendFiles(srcFile,dest,category)
{

}
function getCategory(name)
{
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types)
    {
        let cTypeArray  = types[type];
        for(let i=0;i<cTypeArray.length;i++)
        {
            if(cTypeArray[i] == ext)
            {
                return type;
            }
    }
    }
    return "other";
}