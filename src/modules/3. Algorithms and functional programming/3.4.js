'use strict';

const uniqueSum = (arr) => {
    arr = new Set(arr)
    return [...arr].reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
};

export default uniqueSum;