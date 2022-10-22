const a = {val: 'A'};
const b = {val: 'B'};
const c = {val: 'C'};
const d = {val: 'D'};
a.next = b;
b.next = c;
c.next = d;
d.next = null;
// console.log( a );
let obj = a;
while( obj && obj.key ) {
 	console.log( obj.key ) ;
	obj = obj.next;
}

const instanceofs = (target, obj) =>{
	let p = target;
	while( p ){
		if( p == obj.prototype ) {
			return true;
		}
		p = p.__proto__;
	}
	return false;
}
// console.log( instanceofs( [1,2,3] , String ) )



// 判断是否有环
var hasCycle = function(head) {
	let f = head, s = head;
	while( f!=null && f.next !=null ){
		s = s.next;
		f = f.next.next;
		if( s == f ) return true;
	}
	return false;
}


















