// HARD: Given the information below for Tom and Jerry. 
// Tom - height:  9in   	mass: 8 g
// Jerry - height: 10in 	mass: 45 g

// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula: BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
tomH=9;
tomM=8;
jerryH=10;
jerryM=45;

tomBMI = tomM/(tomH**2);
jerryBMI = jerryM/(jerryH**2);

higherBMI = (jerryBMI < tomBMI);
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
console.log("Is Tom’s BMI higher than Jerry’s? " + higherBMI);



