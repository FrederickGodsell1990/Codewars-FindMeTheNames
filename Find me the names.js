function getNames(input){
    
let spl = input.toLowerCase().match(/(?=name:)(.+?;)/gi)||[] 

// returns array matches including 'Name:' at front - ["Name: jay raay Okocha;", "Name: -jay-;"]

let nam = spl.map(x => x.slice(6).match(/\w+-\w+|(?<= )\w+|(?<= )\w+(?= )|\w+(?= )|(?<=-)\w+(?=-)|\w+(?=-)|(?<=-)\w+|\w+(?=;)/gi)||'%') 

// returns all names in self contained arrays in accordance with regex part of kata rules - ["jay", "raay", "okocha"], ["jay"]
            
if (nam == '%') {return []}

return nam.map((x,i) => x.length == 1 ? [x[0]] : x.length == 2 ? [x[1],x[0]] : [x[2],x[0]])

// returns correct order of names - ["kennedy","john"],["sting"] 

.map((x,i) => x.map(x => x[0].toUpperCase().concat(x.slice(1))))                 

// First letter to uppercase
.map((x,i) => x.map(x => {let sp =[...x];
                         return sp.map((x,i) => i == 0 ? '*'.concat(x.toUpperCase()) :
                         sp[i-1] == '-' ? x.toUpperCase() : x)}))
                         
.map((x,i) => x.join('').replace(/,/g,'').split('*').filter(x => !x == ''))

.map(x => x.length == 1 ? x : x.length == 2 ? [x[0],` ${x[1]}`] : x)

.map(x => x.join())     


    }