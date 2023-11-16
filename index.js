const userInputString = prompt(
    "Please enter a list of froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

let froyoChoices = userInputString.split(",");

let vanillaOrders = [] 
let coffeeOrders = []
let strawberryOrders = [] 
let otherFlavorOrders = []
const froyoOrders = {}
function createFroyoTable(froyoChoices) {
    for(let i = 0; i <froyoChoices.length; i ++) {
        let flavor = froyoChoices[i]
        if(flavor === "vanilla") {
            vanillaOrders.push(flavor);
        } else if(flavor === "coffee") {
            coffeeOrders.push(flavor);
        } else if(flavor === "strawberry") {
            strawberryOrders.push(flavor);    
        } else {
            otherFlavorOrders.push(flavor);
        }
    } 
    
    froyoOrders.vanilla = vanillaOrders.length;
    froyoOrders.coffee = coffeeOrders.length;
    froyoOrders.strawberry = strawberryOrders.length;
    froyoOrders.other = otherFlavorOrders.length;

    return froyoOrders;
}
console.table(createFroyoTable(froyoChoices))
