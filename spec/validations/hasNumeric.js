function hasNumeric(str){
    const numArray = [1,2,3,4,5,6,7,8,9,0];

    for(let i = 0; i < str.length; i++){
        let currentChar = str.charAt(i);

        if(numArray.includes(Number(currentChar)) === true){
            return true;
        }
    }
    return false;
}

module.exports = hasNumeric