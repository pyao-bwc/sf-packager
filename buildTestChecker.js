//You'll need Node.js to run this script. Get it here: https://nodejs.org/en/
//Usage: Run the script using the following command
// `node [path to file] [tests from build file 1] [tests from build file 2]`
//ex: `node C:\Users\mstackhouse\Development\SMP\buildTestChecker.js Test1,Test2,Test3 Test3,Test2,Test4`
//output: 'Test1,Test2,Test3,Test4'

let baseBranchTests = process.argv[3].split(',');
let mergingBranchTests = process.argv[2].split(',');
let allTests = baseBranchTests;

console.log('-------------------------------------');
console.log('Add the following tests to build.xml:');
console.log('-------------------------------------');
for (let i = 0; i < mergingBranchTests.length; i++) {
    if (!baseBranchTests.includes(mergingBranchTests[i])) {
        allTests.push(mergingBranchTests[i]);
    }
}
allTests = allTests.sort().join(',');
console.log(allTests);
