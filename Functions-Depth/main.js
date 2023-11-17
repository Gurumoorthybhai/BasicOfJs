// recursion

/* function pow(x, n) {

    if(n == 1) return x;
    else {
        let result =  x * pow(x, n-1);
        return result;
    }

}

console.log(pow(2,3)); */

let company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Peter',
            salary: 900
        },
    ],

    development: {
        sites: [
            {
                name: 'Alice',
                salary: 1500
            },
            {
                name: 'Jack',
                salary: 1300
            }
        ],
        internal: [
            {
                name: 'Alex',
                salary: 1100
            }
        ]
    }
}

function totalSalary(department ) {

    if(Array.isArray(department)) {
        return department.reduce((prev, cur) => prev + cur.salary, 0)
    } else {
        let sum = 0;
        for(let d of Object.values(department)) {
            console.log(d);
            
            sum = sum + totalSalary(d);
        }
        return sum;
    }
}

console.log(totalSalary(company));
