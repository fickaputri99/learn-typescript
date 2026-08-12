/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */
const keyboardPrice: number = 850000;
const keyboardQty: number = 1;

const mousePrice: number = 275000;
const mouseQty: number = 2;

const monitorPrice: number = 420000;
const monitorQty: number = 1;

const voucherValue: number = 100000;
const premiumMember: boolean = true;
const rewardPointRate: number = 50000;
const vatRate: number = 0.11;

const productSubtotal = (keyboardPrice * keyboardQty) + (mousePrice * mouseQty) + (monitorPrice * monitorQty);
const membershipDiscount = premiumMember ? productSubtotal * 0.10 : 0;
const payment = productSubtotal - membershipDiscount - voucherValue;
const vat = payment * vatRate;
const finalPayment = payment + vat;
const points = Math.floor(payment / 50000);

const freeShipping = premiumMember || payment > 150000;

console.log("Product Subtotal: Rp", productSubtotal);
console.log("Membership Discount: Rp", membershipDiscount);
console.log("Voucher Deduction: Rp", voucherValue);
console.log("Payment Before Tax: Rp", payment);
console.log("VAT: Rp", vat);
console.log("Final Payment: Rp", finalPayment);
console.log("Free Shipping:", freeShipping);