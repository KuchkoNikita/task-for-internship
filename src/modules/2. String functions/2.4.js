'use strict';

const romanToNumber = (number) => {
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    
    return number = number
        .split('')
        .map(element => {
            for (const key in romanNumbers) {
                if (element === key) {
                    element = romanNumbers[key];
                }
            }
            return element;
        })
        .reduce((accumulator, currentValue, index) => {
            if (index >= number.indexOf(Math.max(...number))) return accumulator + currentValue;
            else return accumulator - currentValue;
        });
};

export default romanToNumber;