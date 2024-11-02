(() => {

    // arreglo de temperaturas celsius
    // en lugar de arrayOfNums → arrayOfCelsiusTemperatures o temperaturesCelsius
    const arrayOfNums = [33.6, 12.34];

    // Dirección ip del servidor
    // en lugar de ip → ipServerAddress o serverIp
    const ip = '123.123.123.123';

    // Listado de usuarios
    // en lugar de people → userList o users
    const people = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    // en lugar de emails = people.map(u => u.email) → userEmails = userList.map(user => user.email)

    const emails = people.map(u => u.email);

    // Variables booleanas de un video juego
    // en lugar de jump → canJump
    // en lugar de run → canRun
    // en lugar de noTieneItems → hasItems
    // en lugar de loading → isLoading
    const jump = false;
    const run = true;
    const noTieneItems = true;
    const loading = false;

    // Otros ejercicios
    // tiempo inicial
    // en lugar de start → startTime
    const start = new Date().getTime();

    //....
    // 3 doritos después
    //...
    // Tiempo al final
    // en lugar de end → endTime
    const end = new Date().getTime() - start;


    // Funciones
    // Obtiene los libros
    // en lugar de book → getBooks
    function book() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    // en lugar de BooksUrl → getBooksFromUrl
    // en lugar de u → url
    function BooksUrl(u: string) {
        throw new Error('Function not implemented.');
    }

    // obtiene el área de un cuadrado basado en sus lados
    // en lugar de areaCuadrado → getSquareArea
    // en lugar de s → side
    function areaCuadrado(s: number) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    // en lugar de printJobIfJobIsActive → printJob
    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }






})();




