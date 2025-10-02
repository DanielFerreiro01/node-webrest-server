


// Clase DTO (Data Transfer Object) para crear un Todo.
// Se utiliza para validar y encapsular los datos que entran al sistema.
export class CreateTodoDto {
    // El constructor es privado: esto obliga a que la clase
    // solo pueda ser instanciada desde adentro (por ejemplo, desde el método estático "create").
    private constructor( 
        public readonly text: string 
    ) {}
    // Método estático "create": 
    // Se usa como "fábrica" para construir instancias de CreateTodoDto,
    // aplicando validaciones antes de devolver el objeto.
    // - Recibe un objeto "props" (generalmente viene de req.body).
    // - Retorna una tupla (array con 2 posiciones):
    //   [0] -> string con mensaje de error (opcional).
    //   [1] -> instancia de CreateTodoDto (opcional).
    static create( props: {[key: string]: any} ): [string?, CreateTodoDto?] {
        
        const { text } = props;

        if ( !text ) return ['Text property is required', undefined]

        return [undefined, new CreateTodoDto(text)];
    }


}
