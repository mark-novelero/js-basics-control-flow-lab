function scuberGreetingForFeet(number){
    if(number <= 400){
      return 'This one is on me!';
    }
    if(number > 2000 && number <= 2500){
      return 'I will gladly take your thirty bucks.';
    }
    if(number > 2500){
      return 'No can do.';
    }
}

function ternaryCheckCity(string){
  if(string === 'NYC'){
    return 'Ok, sounds good.';
  } else{
    return 'No go.';
  }
}

function switchOnCharmFromTip(tipDescription){
  if(tipDescription === 'generous'){
    return 'Thank you so much.';
  } else if(tipDescription === 'not as generous'){
    return 'Thank you.';
  } else{
    return 'Bye.';
  }
}