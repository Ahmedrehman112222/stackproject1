function arryBulider (one,two,three)
{
    var arr = [];
        arr.push(one);
        arr.push(two);
        arr.push(three);
        return arr;
}
var simpleArr = arryBulider('apple','pear','plum');
console.log(simpleArr);

Math.random();
var decimal= Math.random();
console.log(decimal);
console.log(decimal * 10);
console.log("ahnmedqqqq".indexOf('h'));
console.log("ahnmed".split('-----'));

var clothes = [];

clothes.push("Blue Jeans");
clothes.push("White T-shirt");
clothes.push("Black Hoodie");
clothes.push("Sneakers");
clothes.push("Leather Jacket");

var removedItem = clothes.pop();
console.log("Removed item:", removedItem);

clothes.push("Black Shirt");
console.log(clothes);

console.log("Third item from the clothes array:", clothes[2]);
var car = {};
car.mileage = 93949;
car.color = "red";
console.log(car); 

car.turnTheKey = function(){
    console.log("the engine is running"); 
};

car.lightOn = function(){
    console.log("the light is on"); 
};

console.log(car);

car.turnTheKey();
car.lightOn();
