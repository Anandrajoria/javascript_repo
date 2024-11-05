function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apple,orange){

    const applePiece=cutFruitPieces(apple)
    const orangePiece=cutFruitPieces(orange)

    const juice=`juice with ${applePiece} piece of apples and ${orangePiece} piece of oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));


