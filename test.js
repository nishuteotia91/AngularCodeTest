let numbers = [1, 2, 3, 4, 5, 6];

    let array = [[0, 1], [2, 3], [4, 5]];

  
console.log("flat ",array.flat())

let sum=0;
numbers.forEach(v=> sum= sum+v);
console.log("Sum",sum);

let arr = [
    {
      name: 'audit',
      ships: ['UAUS', 'OFF'],
      id: 1
    },
    {
      name: 'finding',
      ships: ['UH', 'UMEX'],
      id: 2
    },
    {
      name: 'Incident',
      ships: ['UTWN', 'USGP'],
      id: 3
    }
  ]

  const ships = arr.map(v=> v.ships)
  console.log("ships",ships.flat());

  let arr1 = ['hello', 'world', 'java', 'hello', 'java'];
const count = {};

for(const item of arr1){
    if(count[item]){
        count[item]+=1;
    }
    else
    {
        count[item] =1;
    }
}
console.log("Count Arr",count)