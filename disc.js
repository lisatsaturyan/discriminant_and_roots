
let root1, root2;

let a = prompt("ax^2= ");
let b = prompt("bx= ");
let c = prompt("c= ");


let discriminant = b * b - 4 * a * c;


if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);


    document.write(`D= ${discriminant};     `);
    document.write(`Արմատներն են՝ ${root1}ը և ${root2}ը`);
}


else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);


    document.write(`D= ${discriminant};     `);
    document.write(`Ունի մեկ արմատ՝  ${root1}`);
}


else {
    
    document.write(`D-ն փոքր է 0ից , արմատներ՝ չունի`);
}