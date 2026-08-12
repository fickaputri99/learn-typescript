/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
const pricePerHour: number = 8000;
const hours: number = 5;
const minutes: number = 35;
const discountAmount: number = 15;

const totalMinutes = (hours * 60) + minutes;
const remainingMinutes = totalMinutes % 60;
const billedHours = Math.ceil(totalMinutes / 60);
const paymentBeforeDiscount = billedHours * pricePerHour;
const finalPayment = paymentBeforeDiscount - discountAmount;

console.log("Total playing time:", totalMinutes, "minutes");
console.log("Remaining minutes:", remainingMinutes);
console.log("Total billed hours:", billedHours);
console.log("Payment before discount: Rp", paymentBeforeDiscount);
console.log("Discount: Rp", discountAmount);
console.log("Final payment: Rp", finalPayment);