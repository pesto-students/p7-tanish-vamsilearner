// Assignment-2 
//call 
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this.brand, this.type, this.fuelType);
}

const newBrand = new setBrand('Brand1');

//Apply

function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
	this.brand = brand;
	console.log(`Car details = `, this.brand,this.type, this.fuelType);
}

const newBrand = new setBrand('Brand1');
 
// Bind

const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());