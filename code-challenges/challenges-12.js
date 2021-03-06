"use strict";
// Important Note:
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
//
// Given an array of values use filter to extract odd values.
//
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
//
// ------------------------

const oddFiltration = (arr) => {
    // write your code here
    const result = arr.filter((number) => {
        if (number % 2 != 0) {
            return number;
        }
    });
    // console.log(result);
    return result;
};

// 2) ---------------------
//
// Given data of candidates return the candidates CVs that have more than 4 years of experience
// and works as JS developer

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    // write your code here
    let candidates = [];
    const result = arr.filter((item) => {
        // console.log(item);
        if (item.yearsOfExperience > 4 && item.tech == "JS") {
            return item;
        }
    });
    result.forEach((element) => {
        if (element.LastName == null) {
            candidates.push({
                fullName: element.firstName,
                tech: element.tech,
            });
        } else {
            candidates.push({
                fullName: `${element.firstName} ${element.LastName}`,
                tech: element.tech,
            });
        }
    });

    return candidates;
};

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
//
// ------------------------

const vowelsFiltration = (arr) => {
    // write your code here
    let result = arr.filter((element) => {
        if (
            (element.includes("o") ||
                element.includes("a") ||
                element.includes("i") ||
                element.includes("e") ||
                element.includes("u")) == false
        ) {
            return element;
        }
    });
    return result;
};

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    // write your code here
    let resulte = arr1.filter((e) => {
        if (arr2.includes(e) == false) {
            return e;
        }
    });
    let resultes = arr2.filter((e) => {
        if (arr1.includes(e) == false) {
            return e;
        }
    });
    return resulte.concat(resultes);
};

module.exports = {
    oddFiltration,
    cvsFiltration,
    vowelsFiltration,
    skillComparison,
};