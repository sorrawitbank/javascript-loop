// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName1 = "";
let reversedCompanyName2 = "";
let reversedCompanyName3 = "";

// Start coding here
// Method 1
for (const letter of companyName) {
  reversedCompanyName1 = letter + reversedCompanyName1;
}
console.log(reversedCompanyName1);

// Method 2
for (let i = 0; i < companyName.length; i++) {
  reversedCompanyName2 = companyName[i] + reversedCompanyName2;
}
console.log(reversedCompanyName2);

// Method 3
for (let i = companyName.length - 1; i >= 0; i--) {
  reversedCompanyName3 += companyName[i];
}
console.log(reversedCompanyName3);
