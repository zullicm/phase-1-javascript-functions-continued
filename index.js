//3 of 3
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

// 3 of 3
function mondayWork(plan = 'go to the office'){
    return `This Monday, I will ${plan}.`
}

//0 of 3
function wrapAdjective(flair = '*'){
    return function(describe = 'special'){
        return `You are ${flair}${describe}${flair}!`
    }

}