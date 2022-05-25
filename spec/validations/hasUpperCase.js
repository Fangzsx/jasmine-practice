function hasUpperCase(str){
    for(let i = 0; i < str.length; i++){
        let currentChar = str.charAt(i);

        if(currentChar === currentChar.toUpperCase() && currentChar.match(/[a-z]/i)){
            return true;
        }
    }
    return false;

}

module.exports = hasUpperCase