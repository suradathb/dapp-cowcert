// var TodoList = artifacts.require("./TodoList.sol");
var TodoList = artifacts.require("TodoList");

module.exports = function (deployer) {
  deployer.deploy(TodoList);
};
