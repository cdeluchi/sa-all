// Ex 1

// Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. 
// Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. 

function Rectangle(width, height){
    return function getArea(){
        return width * height;
    };
}
// Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. 
// Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. 
// Square instances should use the same getArea method that Rectangle instances do.

function Square(15, 20){

}
