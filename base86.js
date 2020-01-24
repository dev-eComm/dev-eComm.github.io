// Fill out the following code to satisfy the above tests
/* function makeConsecutive () {
    return 0
  }
   [2, 3, *4*, *5*, 6, *7*, 8] = 3 entries needed. 

Test cases

makeConsecutive([0, 2]) === 2
makeConsecutive([5, 4, 6]) === 0
makeConsecutive([6, 3]) === 2
makeConsecutive([1]) === 0
makeConsecutive([1, 2, 3, 100]) === 96
makeConsecutive([1000, 100, 10, 1]) === 996

*/

var arr = [6, 2, 3, 8];
function makeConsecutive(arr) {
  var rang_min_max = arr.sort(function (x, y){
    return (x - y) 
}); 
  var elem=0;
  if(rang_min_max.length-1==0){
   return 0;
  }else{
   for(i=0;i<=rang_min_max.length-2;i++){
    elem+=(rang_min_max[i+1]-rang_min_max[i]-1);
  }
   return elem;
  }
 }
 

 makeConsecutive(arr);
 console.log(makeConsecutive([6, 2, 3, 8])); //3
 console.log(makeConsecutive([0, 2])); //2 ? I recieved 1 here
 console.log(makeConsecutive([5, 4, 6])); //0
 console.log(makeConsecutive([6, 3]));//2
 console.log(makeConsecutive([1])); //0
 console.log(makeConsecutive([1, 2, 3, 100])); //96
 console.log(makeConsecutive([1000, 100, 10, 1])); //996