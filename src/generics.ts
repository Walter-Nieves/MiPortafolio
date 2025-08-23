const  nombres: string[]=['juan','saray','samuel','shirly','esteban']
const  numeros: number[]=[1,2,3,4,5]
const configuraciones :boolean[]=[true,true,false,false,true,true]

const nombre2:Array<string> =['juan','saray','samuel','shirly','esteban']
const numeros2:Array<number> = [1,2,3,4,5]
const configuraciones2 : Array<boolean> = [true,true,false,false,true,true]

console.log(nombres)
console.log(numeros)
console.log(configuraciones)

console.log(nombres)
console.log(numeros2)
console.log(configuraciones2)

function imprimirCosas <T>(parametro:T):string{
    if(typeof parametro === 'string'){
        return 'lo que me diste es un string:' + parametro
    }else if(typeof parametro === 'number'){
         return 'lo que me diste es un numero:' + String (parametro)
    }else{
        return 'No se de que tipo es lo que me pasaste' + parametro
    }

}

imprimirCosas('hola')
imprimirCosas(1)
imprimirCosas(true)