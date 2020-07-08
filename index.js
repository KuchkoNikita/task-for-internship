// 1.1 Усредненная сумма массивов [очень просто]

const sumAverage = arr => {
    const result = arr.reduce((sum, current) => {

        const arrayResult = current.reduce((sum, number) => {
            return sum + number;
        });

        return sum + arrayResult;
    }, 0);

    return Math.floor(result / arr.length);
};

console.log('1.1 sumAverage ', sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]));

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

console.log('1.2 maxTripletSum', maxTripletSum([3,2,6,8,2,3]));

// 1.3. Сортировка к максимальному значению [просто]

const biggest = (nums) => nums.sort().reverse().join('');

console.log('1.3 biggest', biggest([3, 30, 34, 5, 9]));
console.log('1.3 biggest', biggest([1, 2, 3]));

// 1.4. Комбинации сдвига [просто]

const pattern = (amount) => {
    const arr = [];
    const rezult = [];

    for (let i = 0; i < amount; i++) {
        arr.push(i+1)
    }

    for (let i = 0; i < amount; i++) {
        arr.push(...arr.splice(0, 1));
        rezult[i] = arr.slice();
    }

    
    return rezult;
} ;

console.log('1.4 pattern(3): ', pattern(3));
console.log('1.4 pattern(5): ', pattern(6));

// 1.5. Арифметическая последовательность - сумма из n элементов [просто]

const arithmeticSequenceSum = (a, r, n) => {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result = ( result + a ) + ( i * r );
    }
    return result;
};
console.log('1.5 arithmeticSequenceSum', arithmeticSequenceSum(2, 3, 5));

// 1.6. Диагональная сумма матрицы [просто]

const diagonalSum = (matrix) => {
    let rezult = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) rezult += matrix[i][j];
        }
    }

    return rezult;
}

console.log(
    '1.6 diagonalSum',
    diagonalSum(
        [
            [5, 9, 1, 0],
            [8, 7, 2, 3],
            [1, 4, 1, 9],
            [2, 3, 8, 2],
        ]
    )
);

console.log(
    '1.6 diagonalSum',
    diagonalSum(
        [
            [1, 2],
            [3, 4],
        ]
    )
);

// ####################################################################

// 2.1. Машиночитаемые имена [очень просто]

