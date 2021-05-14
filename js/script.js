// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Fahrenheit-to-Celsius

"use strict"

function enterClicked() {
  // This function get fahrenheit and calculate and show it back

  //input
  const fahrenheit = parseFloat(document.getElementById("Fahrenheit").value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  //output
  document.getElementById('answer').innerHTML = fahrenheit + '&#8457; = ' + celsius.toFixed(2) + '&#8451;'
}