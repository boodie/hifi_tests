// This is an automatically generated file, created by auto-tester on Jun 15 2018, 14:39

Script.include("https://raw.githubusercontent.com/highfidelity/hifi_tests/RC69/tests/utils/branchUtils.js");
var autoTester = createAutoTester(Script.resolvePath("."));

var repositoryPath = autoTester.autoTester();

if (typeof Test !== 'undefined') {
    Test.wait(10000);
};

autoTester.enableRecursive();
autoTester.enableAuto();

Script.include(repositoryPath + "content/entity/light/point/create/test.js");

autoTester.runRecursive();
