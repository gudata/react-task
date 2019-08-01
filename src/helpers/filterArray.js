export default(array)=>{
    let uniqueArr = [];
    for(let i = 0; i < array.length; i++){
        const curr = Number(array[i]);
        const next = Number(array[i+1]);
        if(curr !== next){
            uniqueArr.push(curr);
        }
    }
    return uniqueArr;
}