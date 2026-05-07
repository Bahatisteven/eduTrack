/**
 * calculate the weighted average 
 * weighted: each grade is multiplied by it's credit weighted
 * formula: sum(grade * credits) / sum(credits)
 */

function calculateWeightedAverage (subjectList) {
    if (subjectList.length === 0) return 0;

    const totalWeighted = subjectList.reduce(function(sum, s) {
        return sum + (s.grade * s.credits);
    }, 0);

    const totalCredits = subjectList.reduce(function(sum, s) {
        return sum + s.credits
    }, 0);

    return (totalWeighted / totalCredits).toFixed(2);
}

// convert percentage to gpa

function calculateGpa (average) {
    const avg = parseFloat(everage);
    if (avg >= 90) return 4.0;
    if (avg >= 85) return 3.7;
    if (avg >= 80) return 3.3;
    if (avg >= 75) return 3.0;
    if (avg >= 70) return 2.7;
    if (avg >= 65) return 2.3;
    if (avg >= 60) return 2.0;
    return 0.0;
}

// 1.  render results to DOM
 
function renderCalculator () {

}

// 2. update text element
// 3. update animated progress bar 
// 4. update the home page stats too
//
/**
 *  5. subject.js(form, events, validation)
 * a. add subject form 
 * function () {
 *  function to open form 
 * }
 * if editing, pre-fill the form 
 * function to close form 
 * 
 * 
 * b. handle form submit 
 * 1. validation(grade must be a number between 0 and 100)
 * 2. 
 */