// code your solution here
function saturdayFun(coolKid = "roller-skate" ) {
return `This Saturday, I want to ${coolKid}!`
};

let mondayWork = function (grind = "go to the office") {
   return `This Monday, I will ${grind}.`
};

let wrapAdjective = function (bar="*") {
   return function (Me = "special") {
      return `You are ${bar}${Me}${bar}!`
   }
}
