'use strict';

export default String.prototype.customUpperCase = function(){
    const rezult = this
        .split('')
        .map(element => {
        if (element.charCodeAt() >= 97 && element.charCodeAt() <= 122) {
            return element.charCodeAt() - 32;
        } else {
            return element.charCodeAt();
        }
    }) ;
    return String.fromCharCode(...rezult);
};