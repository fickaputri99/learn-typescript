/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */
const MechanicalKeyboard: number = 850000;
const quantityKeyboard: number = 1;

const WirelessMouse: number = 275000 ;
const quantityMouse: number = 2;

const Mousepad: number = 120000;
const quantityMousepad: number = 1;

const isPremoiumMember: boolean = true;

const totalKeyboard = MechanicalKeyboard * quantityKeyboard ;
const totalMouse = WirelessMouse * quantityMouse;
const totalMousepad = Mousepad * quantityMousepad;

const subtotal = totalKeyboard + totalMouse + totalMousepad;

let TotalItem = 0;
TotalItem++; //MechanicalKeyboard
TotalItem++; //WirelessMouse (1)
TotalItem++; //WirelessMouse(2)
TotalItem++; //Mousepad

console.log(TotalItem);