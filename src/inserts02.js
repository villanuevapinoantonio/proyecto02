db.inventory.deleteMany({})

db.inventory.insertOne(
    {item:"canvas", 
    qty:100, 
    tags: ["cotton"], 
    size:   {h:28,
            w:35.5,
            uom: "cm",

    }}
)

db.inventory.insertOne(
    {item:"folder", 
    qty:50, 
    tags: ["cotton"], 
    size:   {h:30,
            w:22.5,
            uom: "cm",

    }}
)

db.inventory.insertOne(
    {item:"book", 
    qty:100, 
    tags: ["paper"], 
    size:   {h:31,
            w:27,
            uom: "cm",

    }}
)

db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ])

 db.inventory.insertMany([
    { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
    { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
    { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
    { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
    { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] },
 ])