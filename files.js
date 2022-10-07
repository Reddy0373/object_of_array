// Using object of Array { [] }

let subjects={
    array1:["JavaScript","Python","Ruby","Go","languages","isChallenging","isRewarding","difficulty","isFun"],
    array2:["JavaScript","Python","Rubey","Go"],
    array3:[true,7,true],
    output()
    {
        this.array1.forEach(function(a){
            console.log(a);
        });
        console.log(this.array2);
        this.array3.forEach(function(a)
        {
            console.log(a);
        });
    }
}
subjects.output();