class HashTable{
	constructor (){
		this.table = [];
	}
	hashCode( key ) {
		let hash = 0;
		for (let i = 0;i - key.length;i++){
			hash += key.charCodeAt(i);
		}
		return hash;
	}
	put( key, val){
		let hashKey = this.hashCode(key);
		this.table[ hashKey ] = val;
	}
	get( key ) {
		let hashkey = this.hashCode(key);
		return this.table[hashkey];
	}

}

let hashTable = new HashTable();
hashTable.put('person', '章三');
console.log( hashTable );
console.log( hashTable.get('person' ) );



