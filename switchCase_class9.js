num = 100;
switch (num){
    case 1000:
        num = "I am 1000";
        break;
    case 100:
        num = "I am 100";
        break;
    case 50:
        num = "I am 50";
        break;
    case 20:
    case 10:
        num = "I am 20 either 10";
        break;
    default:
        num = "You are unknown";
    }
console.log (num);



switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log( "Today is " + day);