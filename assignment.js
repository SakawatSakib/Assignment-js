/*-- feetToMile--*/

function feetToMile(feet){
    if(feet>0){
        var mile = feet/5280 ;

       return  console.log("Your calculate mile will be: " +mile);
    }
    else{
        return console.log("Value is wrong");
    }
}


/*-- woodCalculator--*/

function woodCalculator (chair,table,bed){
    if(chair>0 || table>0 || bed>0){
        var totalChairWood = chair*1;
        var totalTableWood = table*3;
        var totalBedWood = bed*5;
        var TotalWoodResult = totalChairWood+totalTableWood+totalBedWood;
        return console.log( "total calculated wood: " +TotalWoodResult);
    }
    else{
        return console.log("Please Put Some Values");

    }

}
/*-- brickCalculator--*/
function brickCalculator(floor){
    var floor;
    if(floor>0){
        if(floor>0 && floor<=10){
          var totalbrick= floor*15*1000;

        }
        else if(floor<=20){
            var elevenToTwentyFloorBrick=(floor-10)*12*1000;
            var oneToTenFloorBrick=10*15*1000;
            var totalbrick= elevenToTwentyFloorBrick+oneToTenFloorBrick;
        }
        else if(floor>20){
            var topFloorBrick=(floor-20)*10*1000;
            var topFloorCount=floor-20;
            var elevenToTwentyFloor=floor-topFloorCount;
            var elevenToTwentyFloorBrick=(elevenToTwentyFloor-10)*12*1000;
            var oneToTenFloorBrick=10*15*1000;
            var totalbrick= topFloorBrick+elevenToTwentyFloorBrick+oneToTenFloorBrick;

        }
        return console.log("Total Calculated Brick is: "+totalbrick);
       
    }
    else{
        return console.log("Value is wrong");
    }


}


/*-- tinyFriend--*/

function tinyFriend(friendsname){

    if(friendsname.length!=0){
        var tinyName= friendsname[0];
        for(var i=1;i<friendsname.length;i++)
        {
            var countTiny=friendsname[i];
            if(countTiny.length<tinyName.length)
            {
                tinyName=countTiny;
            }   
        }
        return console.log("Tiny Friend Name Is:"+tinyName);
    }
    else{
        return console.log("Put Some Values");
    }
}
