'use strict';

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

console.group('1.4 pattern');
console.log(pattern(3));
console.log(pattern(6));
console.groupEnd();

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

console.group('1.6 diagonalSum');
console.log(
    diagonalSum(
        [
            [5, 9, 1, 0],
            [8, 7, 2, 3],
            [1, 4, 1, 9],
            [2, 3, 8, 2],
        ]
    ),
);

console.log(
    diagonalSum(
        [
            [1, 2],
            [3, 4],
        ]
    )
);
console.groupEnd();
// ####################################################################

// 2.1. Машиночитаемые имена [очень просто]

const toMachineName = (name, separator) => {
    return name
        .replace(/^[1-9]\s|[,.]/, '')
        .replace(/ +/g, `${separator}`)
        .trim().toLowerCase();
};

console.group('2.1 toMachineName');
console.log(toMachineName('Hello, my name is Andrew', '-'));
console.log(toMachineName('Lorem ipsum sit       DOLOR', '-'));
console.log(toMachineName('3 basics and 1 advance', '-'));
console.groupEnd();

// 2.2. Валютный формат [просто]

const  formatCurrency = (amount) => {
    return amount
};

console.group('2.2 formatCurrency');
console.log(formatCurrency(2546.2562));
console.log(formatCurrency('1500.342626'));
console.log(formatCurrency(100.2134));
console.groupEnd();

// 2.3. Алфавитизация [очень просто]

const alphabetized = (text) =>{
    return text
        .replace(/\s+|\W+|\d+|[_!&,.]+/g, "")
        .split('')
        .map( letter => letter )
        .sort(([a], [b]) => {
            if ( a.toLowerCase() < b.toLowerCase() ) {
                return -1;
            } else {
                return 1;
            }
        })
        .join('');
  }
console.group('2.3 alphabetized');
console.log(alphabetized('The Holy Bible.'));
console.log(alphabetized('Hello!!!!!!!!!!!!!!!!!!!!!!'));
console.groupEnd();

// 2.4. Декодирование римских цифр [просто]

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
            else return accumulator - currentValue
        })
};

console.group('2.4 romanToNumber');
console.log(romanToNumber('I'));
console.log(romanToNumber('C'));
console.log(romanToNumber('CI'));
console.log(romanToNumber('XXI'));
console.log(romanToNumber('IX'));
console.groupEnd();

// 2.5. Декодирование римских цифр [просто]

const countDuplicates = (text) => {
    const myObj = {};
    let counter = 0;
    const str = text.toLowerCase();
    for (let i = 0; i < str.length; i++) {  
        if (!myObj[str[i]]) {
            myObj[str[i]] = 1;
        } else if (myObj[str[i]] < 2) {
            myObj[str[i]]+=1;
            counter++;
        }    
    }
    return counter;
}

console.group('2.5 countDuplicates');
console.log(countDuplicates('abcde'));
console.log(countDuplicates('aabbcde'));
console.log(countDuplicates('aabBcde'));
console.log(countDuplicates('indivisibility'));
console.log(countDuplicates('aA11'));
console.groupEnd();

// 2.6. Замена букв на их позиции [просто]

const replaceWithAlphPositions = (text) => {
    const rezult = text
        .replace(/\s+|\W+|\d+|[_!&,.]+/g, "")
        .toLowerCase()
        .split('')
        .map( letter => letter.charCodeAt() - 96  )
        .join(' ');
    return rezult;
}
console.log('2.6 replaceWithAlphPositions', replaceWithAlphPositions('The sunset sets at twelve o’clock'));

// ####################################################################

// 3. Algorithms and functional programming

// 3.1. Сведение и сортировка массива [очень просто]

const flattenAndSort = (arr) => {
    return arr.map(element => {
        return element.join(' ')
    })
};

console.log('3.1 flattenAndSort', flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

// 3.2. Функциональное сложение [просто]

const add = n => x => n + x;

const addOne = add(1);
const addThree = add(3);

console.group('3.2 add');
console.log( '3.2 addOne(3); : ', addOne(3) );
console.log( '3.2 addThree(3); : ', addThree(3) );
console.groupEnd();

// 3.3. Умножение всех элементов массива [просто]

const multiplyAll = arr => number => arr.map(element => element * number);
console.log('3.3 multiplyAll: ', multiplyAll([1, 2, 3])(2));

// 3.4. Сумма уникальных значений [просто, имеет различные решения]

const uniqueSum = (arr) => {
    arr = new Set(arr)
    return [...arr].reduce((accumulator, currentValue) => (accumulator + currentValue), 0)
}
console.group('3.4 uniqueSum');
console.log( uniqueSum([1, 2, 3]) );
console.log( uniqueSum([1, 3, 8, 1, 8]) );
console.log( uniqueSum([-1, -1, 5, 2, -7]) );
console.log( uniqueSum([]) );
console.groupEnd();

// 3.5. Reduce [просто +]

const reduce = (arr, callback, initialValue) => {

}

reduce(
    [1, 2, 3, 4],
    (acc, value) => acc * value,
    1,
)

// 3.6. Функциональная композиция [не просто]

const compose = (f, g, h) => (a) => {

}

// ##################################################
// 4. Функции высшего порядка

// 4.1. Распаковка аргументов [просто]
/*
const fn = (num, bool) => {
    return {num, bool};
}

const spread = (callback, arr) => {
    return callback(...arr);
}

console.log('4.1 spread',spread(fn, [1, true]));

// 4.2. ZipWith [просто +]

const zipWith = (fn, a0, a1) => {
    const arrayRezult = []
    for (let i = 0; i < a0.length && a1.length; i++) {
        arrayRezult[i] = fn(a0[i], a1[i]);
    }
    return arrayRezult;
}

console.group('4.2 zipWith');
console.log(zipWith(Math.pow, [10,10,10,10], [0,1,2,3]));
console.log(zipWith(Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1]));
console.groupEnd();

// 5. Рекурсия
// 5.1. Сумма последовательности [просто]

const sequenceSum = (begin, end, step, sum = begin) => {
    if (begin + step <= end) {
        begin += step;
        sum += begin;
        return sequenceSum(begin, end, step, sum);
    }
    return sum;
}
    
console.group('5.1 sequenceSum');
console.log( sequenceSum(2, 2, 2) );
console.log( sequenceSum(2, 6, 2) );
console.log( sequenceSum(1, 5, 1) );
console.log( sequenceSum(1, 5, 3) );
console.groupEnd();

// 5.2. Связанный список в строку [просто]


const stringify = (list) => {
    return list;
}


console.group('5.2 stringify');
console.log( stringify(new Node(1, new Node(2, new Node(3)))) );
console.log( stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))) );
console.groupEnd();


// 6. Классы и паттерны

// 6.1. Singleton [просто]

let singletonInstance = null;
class Singleton {
    constructor(name) {
        if (!singletonInstance) {
            singletonInstance = this;
        }
        this.name = name;
        return singletonInstance
    }
}

const o1 = new Singleton();
const o2 = new Singleton();

o1.name = 'Singleton';

console.group('6.1 Singleton');
console.log(o1 === o2);
console.log(o2.name);
console.groupEnd();

// 6.2. Расширение String [просто]

String.prototype.customUpperCase = function(){

}

console.group('6.1 Singleton');
console.log('abc'.customUpperCase());
console.log('Hello, world!'.customUpperCase());
console.groupEnd();

// 7. Сортировка
// 7.1. Сортированный список объектов [очень просто]

const customSort = (list, sortBy) => {
    list.sort((element1, element2) => {
        if (element1[sortBy] > element2[sortBy]) {
            return -1;
        } else if (element1[sortBy] < element2[sortBy]) {
            return 1;
        } else {
            return 0
        }
    })
    return list;
};

let arr = [
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
]

arr = customSort(arr, 'a')
console.log('7.1 customSort', arr);
*/