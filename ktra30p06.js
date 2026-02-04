let hocSinh = "Quý, Nam, Lan, Hùng, Nam";

let students = hocSinh.split(", ");

console.log(students);

students.reverse();
console.log(students);

let timKiem = "Lan";
if (timKiem === "Lan") {
    console.log("Tên Lan tồn tại trong mảng");
} else {
    console.log("Tên Lan không tồn tại trong mảng");
}

let mang = [100,200,300,400,500];
for(let index of mang){
    console.log(index);
    
}
for(let text in mang){
    console.log(text);
    
}