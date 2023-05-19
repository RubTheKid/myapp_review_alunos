export function inss(salary: number){
    let inss = 0

    if (salary < 1300){
        inss = salary * 0.06
    } else if (salary >= 1300 && salary < 1800){
        inss = salary * 0.08
    } else if (salary >= 1800 && salary < 3000){
        inss = salary * 0.10
    } else {
        inss = salary * 0.12
    }
    return parseFloat(inss.toFixed(2));
    
}

export function irf(salary: number){
    let irf = 0

    if (salary >= 1900 ){
        irf = salary * 0.08
    }  

    return parseFloat(irf.toFixed(2));
}

export function vale(salary: number){
    let vale = 0;

    vale = salary * 0.06;

    return parseFloat(vale.toFixed(2));
}

export function liquido(salary: number){
    

    return salary - irf(salary) - vale(salary) - inss(salary) 
}