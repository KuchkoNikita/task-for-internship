'use strict'

// 2.2. Валютный формат [просто]

const formatCurrency = amount => {
  const amountList = Number(amount).toFixed(2).split('')

  return amountList.reduceRight((accum, item, rightIndex) => {
    const leftIndex = amountList.length - rightIndex - 1

    if (amountList.length > 6 && rightIndex < amountList.length - 3 && leftIndex > 3 && (leftIndex) % 3 === 0) {
      accum.unshift(',')
    }

    accum.unshift(item)
    return accum
  }, []).join('')
}

export default formatCurrency
