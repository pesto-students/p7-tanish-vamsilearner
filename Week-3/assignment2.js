// Assignment-2 
//call 
function Car(type, fuelType){ //it is nothing but a skeleton
	this.type = type;           // with this structure we can reuse the skeleton where we want with out writing the code eveytime, when ever we are calling similar function
	this.fuelType = fuelType;
}

function setBrand(brand){       // declared function
	Car.call(this, "convertible", "petrol"); // calling the car skeleton with .call here, and also passing thisObj and type and fueltype
	this.brand = brand;   // where ever brand value gets when the function calls that gets update here
	console.log(`Car details = `, this.brand, this.type, this.fuelType); 
}

const newBrand = new setBrand('Brand1'); //calling setBrand function 

//Apply

function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.apply(this, ["convertible", "petrol"]); //Here in apply thisObj and array(Syntax with array literal) is passed as args
	this.brand = brand;
	console.log(`Car details = `, this.brand,this.type, this.fuelType);
}

const newBrand = new setBrand('Brand1');
 
// Bind

const module = { //function declared
    x: 42,      // value
    getX: function() { //function
      return this.x; //returns x
    }
  };
  
  const boundGetX = unboundGetX.bind(module); //passing the module as args
  console.log(boundGetX());