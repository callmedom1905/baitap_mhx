var arr = [1,2,3,4,5];
var t = 0;
var tb = 0;
for(var i = 0;i < arr.length; i++){
    t += arr[i];
    tb = t/arr.length;
}
console.log('Tổng các phần tử trong mảng là: '+t);
console.log('Trung bình cộng các phần tử trong mảng là: '+tb);

