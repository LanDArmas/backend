import * as dotenv from "dotenv";
export abstract class ConfigServer{
    constructor(){
  const nodeNameEnv = this.createPathEnv 	  (this.nodeEnv);
       dotenv.config({
           path: nodeNameEnv,
       });
     }
    // Función que retorna un string o indefinido
    public getEnvironment(k: string): string | undefined{
       return process.env[k];
    }
    // Funcion que retorna un número pasando un string
    public getNumberEnv(k: string): number{
        return Number(this.getEnvironment(k));
    }
    // Función que retorna un string o vacio
    public get nodeEnv (): string {
       return this.getEnvironment( "NODE_ENV")?.trim() || " ";
    }


    public createPathEnv (path: string): string {
        const arrEnv: Array<string> = ["env "];
          if (path.length > 0){
          const stringToArray = path.split(".");
          arrEnv.unshift(...stringToArray);
          }
          return "." + arrEnv.join(".");
        }
    }      
   
