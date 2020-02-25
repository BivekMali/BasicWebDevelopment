import { school } from "./school"
function add()
{
    let n: string = getname('name');
    let a: number = getage('age');
    let c: number = getclass('clas');
    let s: string = getsub('sub');
    let sc: string = getsch('sch');
    PostValue(n,a,c,s,sc);

}

document.getElementById('Start')!.addEventListener('click',add);

function getname(name: string): string{

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('name');
    // if (inputElement.value === '')
    // {
    //     return undefined;
    // }
    // else{
    return inputElement.value;
    //}
}
function getage(age: string): number{

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('age');
    // if (inputElement.value === '')
    // {
    //     return undefined;
    // }
    // else{
    return Number(inputElement.value);
    // }
}function getclass(clas: string): number{

     const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('clas');
    // if (inputElement.value === '')
    // {
    //     return undefined;
    // }
    // else{
    return Number(inputElement.value);
    // }
}function getsub(sub: string): string{

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('sub');
    // if (inputElement.value === '')
    // {
    //     return undefined;
    // }
    // else{
    return inputElement.value;
  //  }
}
function getsch(sch: string): string{

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('sch');
    return inputElement.value;

}



function PostValue(name?:string,age?:number,clas?:number,sub?:string,sh?:string): void
{
    const PElement: HTMLElement | null = document.getElementById('Post');
    PElement!.innerText = `Name = ${name} \n Age = ${age}\n Class = ${clas}\n Fav Subject = ${sub}\n School = ${sh}` ;
    console.log("Name " + name+ '\n' +
    'Age ' + age+ '\n' +
    'Class '+clas+ '\n' +
    'Subject '+sub+ '\n' +
    'School '+sh)
}

const sch : school = new school();

document.getElementById('RNPS')!.addEventListener('click',ShowRnps);
document.getElementById('ST')!.addEventListener('click',ShowST);
document.getElementById('MCKV')!.addEventListener('click',ShowMCKV);
document.getElementById('Don')!.addEventListener('click',ShowDon);
document.getElementById('Sun')!.addEventListener('click',ShowSun);
function ShowRnps():void
{
    
    var z:string = "";
    const PElement: HTMLElement | null = document.getElementById('Pos');
    for (var val of sch.RNPS) 
    {
        z = z + val + "\n";

    }
    
    PElement!.innerText = `${z}`;
}
function ShowST():void
{
    
    var z:string = "";
    const PElement: HTMLElement | null = document.getElementById('Pos');
    for (var val of sch.ST) 
    {
        z = z + val + "\n";

    }
    
    PElement!.innerText = `${z}`;
}function ShowMCKV():void
{
    
    var z:string = "";
    const PElement: HTMLElement | null = document.getElementById('Pos');
    for (var val of sch.MCKV) 
    {
        z = z + val + "\n";

    }
    
    PElement!.innerText = `${z}`;
}function ShowDon():void
{
    
    var z:string = "";
    const PElement: HTMLElement | null = document.getElementById('Pos');
    for (var val of sch.Don) 
    {
        z = z + val + "\n";

    }
    
    PElement!.innerText = `${z}`;
}function ShowSun():void
{
    
    var z:string = "";
    const PElement: HTMLElement | null = document.getElementById('Pos');
    for (var val of sch.Sun) 
    {
        z = z + val + "\n";

    }
    
    PElement!.innerText = `${z}`;
}