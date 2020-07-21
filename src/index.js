'use strict'

import sumAverage from './modules/1. Array functions/1.1'
import maxTripletSum from './modules/1. Array functions/1.2'
import biggest from './modules/1. Array functions/1.3'
import pattern from './modules/1. Array functions/1.4'
import arithmeticSequenceSum from './modules/1. Array functions/1.5'
import diagonalSum from './modules/1. Array functions/1.6'

import toMachineName from './modules/2. String functions/2.1'
import formatCurrency from './modules/2. String functions/2.2'
import alphabetized from './modules/2. String functions/2.3'
import romanToNumber from './modules/2. String functions/2.4'
import countDuplicates from './modules/2. String functions/2.5'
import replaceWithAlphPositions from './modules/2. String functions/2.6'

import flattenAndSort from './modules/3. Algorithms and functional programming/3.1'
import add from './modules/3. Algorithms and functional programming/3.2'
import multiplyAll from './modules/3. Algorithms and functional programming/3.3'
import uniqueSum from './modules/3. Algorithms and functional programming/3.4'
import reduce from './modules/3. Algorithms and functional programming/3.5'
import compose from './modules/3. Algorithms and functional programming/3.6'

import spread from './modules/4. Higher Order Functions/4.1'
import zipWith from './modules/4. Higher Order Functions/4.2'

import sequenceSum from './modules/5. Recursion/5.1'
import stringify from './modules/5. Recursion/5.2'

import { SingletonES6, SingletonES5 } from './modules/6. Classes and Patterns/6.1'
import {} from './modules/6. Classes and Patterns/6.2'

import customSort from './modules/7. Sort/7.1'

import createArray from './modules/additional-task/additional-task'
// 1.1 Усредненная сумма массивов [очень просто]
console.log('1.1 sumAverage ', sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]))

// 1.2. Сумма трех максимальных значений [очень просто]
console.log('1.2 maxTripletSum', maxTripletSum([3, 2, 6, 8, 2, 3]))

// 1.3. Сортировка к максимальному значению [просто]
console.log('1.3 biggest', biggest([3, 30, 34, 5, 9]))
console.log('1.3 biggest', biggest([1, 2, 3]))

// 1.4. Комбинации сдвига [просто]
console.group('1.4 pattern')
console.log(pattern(3))
console.log(pattern(6))
console.groupEnd()

// 1.5. Арифметическая последовательность - сумма из n элементов [просто]
console.log('1.5 arithmeticSequenceSum', arithmeticSequenceSum(2, 3, 5))

// 1.6. Диагональная сумма матрицы [просто]
console.group('1.6 diagonalSum')
console.log(
  diagonalSum(
    [
      [5, 9, 1, 0],
      [8, 7, 2, 3],
      [1, 4, 1, 9],
      [2, 3, 8, 2]
    ]
  )
)

console.log(
  diagonalSum(
    [
      [1, 2],
      [3, 4]
    ]
  )
)
console.groupEnd()

// ####################################################################

// 2.1. Машиночитаемые имена [очень просто]
console.group('2.1 toMachineName')
console.log(toMachineName('Hello, my name is Andrew', '-'))
console.log(toMachineName('Lorem ipsum sit       DOLOR', '-'))
console.log(toMachineName('3 basics and 1 advance', '-'))
console.groupEnd()

// 2.2. Валютный формат [просто]
console.group('2.2 formatCurrency')
console.log(formatCurrency(2546.2562))
console.log(formatCurrency('1500.342626'))
console.log(formatCurrency(100.2134))
console.groupEnd()

// 2.3. Алфавитизация [очень просто]
console.group('2.3 alphabetized')
console.log(alphabetized('The Holy Bible.'))
console.log(alphabetized('Hello!!!!!!!!!!!!!!!!!!!!!!'))
console.groupEnd()

// 2.4. Декодирование римских цифр [просто]
console.group('2.4 romanToNumber')
console.log(romanToNumber('I'))
console.log(romanToNumber('C'))
console.log(romanToNumber('CI'))
console.log(romanToNumber('XXI'))
console.log(romanToNumber('IX'))
console.groupEnd()

// 2.5. Декодирование римских цифр [просто]
console.group('2.5 countDuplicates')
console.log(countDuplicates('abcde'))
console.log(countDuplicates('aabbcde'))
console.log(countDuplicates('aabBcde'))
console.log(countDuplicates('indivisibility'))
console.log(countDuplicates('aA11'))
console.groupEnd()

// 2.6. Замена букв на их позиции [просто]
console.log('2.6 replaceWithAlphPositions', replaceWithAlphPositions('The sunset sets at twelve o’clock'))

// ####################################################################

// 3. Algorithms and functional programming

// 3.1. Сведение и сортировка массива [очень просто]
console.log('3.1 flattenAndSort', flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))

// 3.2. Функциональное сложение [просто]
const addOne = add(1)
const addThree = add(3)

console.group('3.2 add')
console.log('3.2 addOne(3); : ', addOne(3))
console.log('3.2 addThree(3); : ', addThree(3))
console.groupEnd()

// 3.3. Умножение всех элементов массива [просто]
console.log('3.3 multiplyAll: ', multiplyAll([1, 2, 3])(2))

// 3.4. Сумма уникальных значений [просто, имеет различные решения]
console.group('3.4 uniqueSum')
console.log(uniqueSum([1, 2, 3]))
console.log(uniqueSum([1, 3, 8, 1, 8]))
console.log(uniqueSum([-1, -1, 5, 2, -7]))
console.log(uniqueSum([]))
console.groupEnd()

// 3.5. Reduce [просто +]
console.log('3.5 Reduce', reduce(
  [1, 2, 3, 4],
  (acc, value) => acc * value,
  1
))

// 3.6. Функциональная композиция [не просто]

const f = (a) => a + 1
const g = (a) => a + 2
const h = (a) => a + 3
console.log('3.6 compose: ', compose(f, g, h)(1))

// ##################################################
// 4. Функции высшего порядка

// 4.1. Распаковка аргументов [просто]
const fn = (num, bool) => {
  return { num, bool }
}
console.log('4.1 spread', spread(fn, [1, true]))

// 4.2. ZipWith [просто +]
console.group('4.2 zipWith')
console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]))
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7, 8], [4, 7, 1, 4, 7, 1]))
console.groupEnd()

// 5. Рекурсия
// 5.1. Сумма последовательности [просто]
console.group('5.1 sequenceSum')
console.log(sequenceSum(2, 2, 2))
console.log(sequenceSum(2, 6, 2))
console.log(sequenceSum(1, 5, 1))
console.log(sequenceSum(1, 5, 3))
console.groupEnd()

// 5.2. Связанный список в строку [просто]
class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

console.group('5.2 stringify')
console.log(stringify(new Node(1, new Node(2, new Node(3)))))
console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))))
console.groupEnd()

// 6. Классы и паттерны
// 6.1. Singleton [просто]
const o1 = new SingletonES6()
const o2 = new SingletonES6()

o1.name = 'Singleton'

console.group('6.1 SingletonES6')
console.log(o1 === o2)
console.log(o2.name)
console.groupEnd()

const singleton1 = SingletonES5.getInstance()
const singleton2 = SingletonES5.getInstance()

singleton1.setName('Singleton')

console.group('6.1 SingletonES5')
console.log(singleton1 === singleton2)
console.log(singleton2.getName())
console.groupEnd()

// 6.2. Расширение String [просто]
console.group('6.2 customUpperCase')
console.log('abc'.customUpperCase())
console.log('Hello, world!'.customUpperCase())
console.groupEnd()

// 7. Сортировка
// 7.1. Сортированный список объектов [очень просто]
let arr = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 }
]

arr = customSort(arr, 'a')
console.log('7.1 customSort', arr)

console.group('additional-task')
console.log(createArray(10, 2, 1))
console.log(createArray(10, 2, () => 5))
console.groupEnd()
