/*
Los que tienen el valor "canvas" en el campo item
*/
db.inventory.find({item:"canvas"})  

/*
Hacer la misma consulta usando el operador $eq
*/
db.inventory.find({item:{$eq: "canvas"}})

/*
Los que tienen en el campo qty la cantidad exacta de 20
*/
db.inventory.find({qty: {$eq: 20} })

/*
{ _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] }
{ _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] }
*/

/*
Aquellos cuyo campo code del campo item sea 123 
*/
db.inventory.find({"item.code":"123"})

/*
{ _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] }
{ _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] }
*/

/*
Aquellos que tengan "B" como uno de los elementos del array tags
*/
db.inventory.find( { tags: "B" } )

/*
{ _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] }
{ _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] }
{ _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] }
{ _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] }

Nótese que elemento con _id: 5 no ha salido dado que, a pesar de que tenga una B a lo largo del array, este no es un elemento en sí
del array, ya que el elemento en el que se encuentra es [ "A", "B" ]
*/

