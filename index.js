function scuberGreetingForFeet(distance){
  let result
  if (distance <= 400) {
    result = 'This one is on me!';
  }
  else if (distance > 2000 && distance <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500) {
    result = 'No can do.';
  }
  return result
}
console.log(scuberGreetingForFeet(199));// Write your code here!

function ternaryCheckCity(city){
 return  city === 'NYC' ? "Ok, sounds good." : "No go." // Write your code here!
}
console.log(ternaryCheckCity('Pittsburgh'))

function switchOnCharmFromTip(tip){
 switch (tip) {
  case 'generous':
    return  'Thank you so much.';
  case 'not as generous':
    return 'Thank you.';

  default:
    return 'Bye'
 } 
}
console.log(switchOnCharmFromTip('here'))