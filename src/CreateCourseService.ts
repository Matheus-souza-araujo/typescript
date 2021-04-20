
interface Course { //nossa interface de todas as informações que queremos para passar pro metodo
    name: string;
    duration?: number; //usamos o ?: para caso não queiramos que o atributo seja obritório
    edurcator: string;
}

class CreateCourseService {
    
    execute({ duration = 8, edurcator, name}: Course){ //desestruturamos dessa forma para podermos passar na ordem que quisermos os parâmetros
// colocamos o 8 no duration para que ele seja o padrão
        console.log(name, duration, edurcator)
    }
}

export default new CreateCourseService();