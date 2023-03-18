// const users = [
  // {
    // first_name: 'Mike',
    // last_name: 'Sheridan'
  // },
  // {
    // first_name: 'Tim',
    // last_name: 'Lee'
  // },
  // {
    // first_name: 'John',
    // last_name: 'Carte'
  // }
// ];


// let userDetail=users.map(function(user)
// {
// return user.first_name + user.last_name;
// });
// console.log(userDetail);







// const person = [
  // {
    // first_name: 'Mike',
    // last_name: 'Sheridan',
    // age: 30
  // },
  // {
    // first_name: 'Tim',
    // last_name: 'Lee',
    // age: 45
  // },
  // {
    // first_name: 'John',
    // last_name: 'Carte',
    // age: 25
  // }
// ];

// let personDetail=users.map(function(f)
// {
		// return f.last_name;	
	
// });
// console.log(personDetail);





// const place = [
  // {
    // first_name: 'Mike',
    // location: 'London'
  // },
  // {
    // first_name: 'Tim',
    // location: 'US'
  // },
  // {
    // first_name: 'John',
    // location: 'Australia'
  // }
// ];





// let placeDetail=place.map(function(l)
// {
// return `${l.first_name} lives in ${l.location}`;
// });
// console.log(placeDetail);










// const employees = [
  // { name: 'David Carlson', age: 30 },
  // { name: 'John Cena', age: 34 },
  // { name: 'Mike Sheridan', age: 25 },
  // { name: 'John Carte', age: 50 }
// ];





// const eD = employees.filter(function(detail) {
   // return detail.age > 30;
// });

// console.log(eD);


// const eA = employees.filter(aGe=>aGe.age>30);

// console.log(eA);




// const labors = [
 // { name: "David Carlson", age: 30 },
 // { name: "John Cena", age: 34 },
 // { name: "Mike Sheridan", age: 25 },
 // { name: "John Carte", age: 50 }
// ];

// let found = labors.find(labor=>labor.name =="John Cena");

// console.log(found);


// const laborInfo = laborDetail=>laborDetail.name=="John Carte";

// console.log(labors.findIndex(laborInfo));


// let founds=labors.find(function(result){
	// return result.name==="John Carte"
// });
// console.log(founds);

// let founds1=labors.findIndex(function(result1){
	// return result1.name==="John Carte"
// })
// console.log(founds1);













// const numbers = [1, 2, 3, 4, 5];
// let sumNum=numbers.reduce((accumulator,currentvalue)=> accumulator+currentvalue);
// console.log(sumNum);

// let sumNum=numbers.reduce(function(pre,curr,indexvalue){

// return pre+curr;
// })
// console.log(sumNum);






var info = {
    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    address: {
        street: {
            street_num: '495',
            street_name: 'Grove Street',
        },
        city: 'New York',
        country: 'USA',
    },
};


for(let key in info)
{
	if(info[key] instanceof Object)
	{
		for(insidekey in info[key])
		{
			if(info[key][insidekey] instanceof Object)
			{
				for(insidekey2 in info[key][insidekey])
				{
					console.log(`${insidekey2} => ${info[key][insidekey][insidekey2]}`);
				}
			}
		}
		console.log(`${insidekey} => ${info[key][insidekey]}`);
	}
	else{
		console.log(`${key} =>  ${info[key]}`);
	}
}


// for(let key in info)
// {
	// if(info[key] instanceof Object)
		
	// {
		// for(insidekey in info[key])
		// {
		// console.log(`${insidekey} => ${info[key][insidekey]}`);
		// }
		
	// }
	// else{
		// console.log(`${key} =>  ${info[key]}`);
	// }
// }

