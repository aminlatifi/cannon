// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "cannon-std/Cannon.sol";

import "../src/Greeter.sol";

contract ContractTest is Test {
  using Cannon for Vm;

  Greeter greeter;

  function setUp() public {
    greeter = Greeter(vm.getAddress("Greeter"));
  }

  function testExample() public {
    greeter.setGreeting("Namaste");
    assertTrue(greeter.greet() == "Namaste");
  }
}
