
function numString(n) { 
    let result = "";

    if (n < 10) { 
        result = "0" + n;
    } else {
        result = n;
    }

    return result;
}

function getRandom(max) { 
    let r = Math.random(); 
    let n = r * max; 
    return parseInt(n);
}

function getResult(n1, n2) {
    let result = parseInt(n1) + parseInt(n2);
    return result;
}

function getRandomByRange(min, max) {
    let result = min + parseInt(((max - min) + 1) * Math.random());
    return result;
}

function collisionCheck(me, you) {

    let result1 = ((me.x + me.width) >= you.x) && ((me.y + me.height) >= you.y);

    let result2 = ((me.x + me.width) >= you.x) && (me.y <= (you.y + you.height));

    let result3 = (me.x <= (you.x + you.width)) && ((me.y + me.height) >= you.y);

    let result4 = (me.x <= (you.x + you.width)) && (me.y <= (you.y + you.height));
    
   return (result1 && result2 && result3 && result4);

}

function getStringOutOfRange(str, limit){
    
    let result=str;

    if(str.length>limit){ 
        result=str.substring(0, limit)+".."; 
    }

    return result;
}