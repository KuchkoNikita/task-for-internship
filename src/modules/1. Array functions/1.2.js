'use strict';

// 1.2. Сумма трех максимальных значений [очень просто]

const maxTripletSum = (arr) => {
    const resultArr = [];

    for (let i = 0; i < 3; i++) {
        let maxElem = Math.max(...arr);
        resultArr.push(maxElem);
        arr.splice(arr.indexOf(maxElem, 0), 1);
    }

    return resultArr.reduce((sum, current)=> sum + current, 0);
};

export default maxTripletSum;