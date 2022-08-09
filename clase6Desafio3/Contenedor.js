const {promises: fs} = require ('fs');

class Contenedor{
    constructor(arch){
    this.arch=arch;
    }
        
    async getAll(){
        try {
            let objetos = await fs.readFile(this.arch, 'utf-8');
            console.log(objetos);
            return JSON.parse(objetos);
        } catch (error) {
            console.error('Error de lecturaaa');
            console.error(error);
            return [];
        }
    }
    
}
module.exports = Contenedor;