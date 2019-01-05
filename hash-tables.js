// 1.  It's a type of data structure that stores values linked to keys forming pairs
// 2. Converting strings to numerical index
// 3. It creates a hash code from each key, assigning an index for the key-value pair
// 4. Objects can hold different types of data bundled together, and hash tables already have values assigned, its uniform
// 5. 
//     a) object
//     b) object
//     c) hash
//     d) hash
//     e) object


//6.

class SalesBuddy {
    constructor() {
        this.costumers = []
    }

    hash(key) {
        let hashCode = 0;
        for ( i = 0; i < key.length; i++) {
            hashCode += key.charCodeAt(i);
        }

        return hashCode
    }

    get(phoneNumber) {
        let h = hash(phoneNumber);

        if(!this.costumers[h]){
            return undefined
        }

        let result = this.costumers[h];

        return result;
    }

    add(name, address, phoneNumber){
        let h = hash(phoneNumber);

        if(!this.list[h]){
            this.list[h] = []
        }

        this.list[h].push([name, address, phoneNumber])
    }
}

let newCostumer = new salesBuddy();

newCostumer.add('gerardo', 'matancillas', 8119906978)
newCostumer.get(8119906978)

//7.

class Inventory {
    constructor(){
        this.list = []

    }

    hash(key) {
        let hashCode = 0;
        for ( i = 0; i < key.length; i++) {
            hashCode += key.charCodeAt(i);
        }

        return hashCode
    }

    get(serialNumber) {
        let h = hash(serialNumber);

        if(!this.list[h]){
            return undefined
        }

        let result = this.list[h];

        return result;
    }

    set(name,serialNumber,price){
        let h = hash(serialNumber);

        if(!this.list[h]){
            this.list[h] = []
        }

        this.list[h].push([name, serialNumber, price])
    }
}

//8.

class Newspapers {
    constructor(){
        this.list = [];
    }

    hash(key) {
        let hashCode = 0;
        for ( i = 0; i < key.length; i++) {
            hashCode += key.charCodeAt(i);
        }

        return hashCode
    }

    get(publisher, date){
        
    }
}