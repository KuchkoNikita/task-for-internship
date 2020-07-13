'use strict';

const zipWith = (fn, a0, a1) => {
    const arrayRezult = [];
    for (let i = 0; i < a0.length && a1.length; i++) {
        arrayRezult[i] = fn(a0[i], a1[i]);
    }
    return arrayRezult;
};

export default zipWith;