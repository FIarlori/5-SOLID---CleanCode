//función anónima autoinvocada
(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    // en lugar de fs → filesToEvaluate
    // en lugar de f → flagged
    const fs = [
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 1, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ];

    // Archivos marcados para borrar - files to delete
    // en lugar de archivos → filesToDelete
    // en lugar de (f => f.f) (files => files.flagged)
    const arhivos = fs.map(f => f.f);


    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea

    // día de hoy - today
    //en lugar de ddmmyyyy → currentDay o today
    const ddmmyyyy = new Date();

    // días transcurridos - elapsed time in days
    //en lugar de d → transcurredDays o elapsedTimeInDays
    const d: number = 23;

    // número de archivos en un directorio - number of files in directory
    //en lugar de dir → numberOfFiles o numberOfFilesInDirectory 
    const dir = 33;

    // primer nombre - first name
    //en lugar de nombre → firstName
    const nombre = 'Fernando';

    // primer apellido - last name
    //en lugar de apellido → lastName
    const apellido = 'Herrera';

    // días desde la última modificación - days since modification
    //en lugar de dsm → daysSinceLastUpdate
    const dsm = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    //en lugar de max → maxClassesPerStudent
    const max = 6;


})();



