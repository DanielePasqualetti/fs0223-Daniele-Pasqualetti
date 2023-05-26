class accountFiglio {
 balanceInit: number;
 constructor(balanceInit: number) {
  this.balanceInit = balanceInit;
 }
 public deposit(amount: number): number {
  return amount;
 }
 public oneWithdraw(amount: number): number {
  return amount;
 }
 public twoWithdraw(amount: number): number {
  return amount;
 }
 public totalBalance(): number {
  return this.oneWithdraw(500) - this.twoWithdraw(400);
 }
}
console.log("I soldi del figlio sono" + "\n");
