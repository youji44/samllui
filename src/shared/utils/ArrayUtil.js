import _ from 'lodash'

export const arrayUnion = (arr1, arr2, identifier) => {
    const array = [...arr1, ...arr2]

    return _.uniqBy(array, identifier)
}

export const isArrayEmpty = (array = []) => {
    return (typeof array !== 'undefined' && array.length === 0)
    // if (typeof array !== 'undefined' && array.length === 0) {
    //     // the array is defined and has no elements
    //     return true
    // }

}