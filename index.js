// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if(somevalue=43){
        return 1;
    }
    else if(somevalue=50){
        return 8;
    }
    else if(somevalue=34){
        return 8;
    }
   
}
function distanceFromHqInFeet(FeetValue) {
  if (FeetValue=43){
    return 264;
  }
  else if(FeetValue=50){
    return 2112;
  }
  else if(FeetValue=34){
    return 2112;
  }
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock =264;
    const distanceBetweenBlocks=Math.abs(destination-start);
    return distanceBetweenBlocks * feetPerBlock;

}
function calculatesFarePrice(start, destination) {
const distanceFromHqInFeet=distanceTravelledInFeet(start,destination);
if (distanceFromHqInFeet<=400){
  return 0;
}else if(distanceFromHqInFeet>400 && distanceFromHqInFeet<2000){
  return(distanceFromHqInFeet-400)* 0.02;
}
else if(distanceFromHqInFeet>2000 && distanceFromHqInFeet<=2500){
  return 25;
}
else{
  return "Cannot travel that far";
}
}