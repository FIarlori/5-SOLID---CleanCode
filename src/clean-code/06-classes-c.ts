(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizar la composición frente a la herencia (evitar los extends)

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email: string;
        role: string;
    }

    class User {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {

        birthdate: Date;
        gender: Gender;
        name: string;
        email: string;
        role: string;
        workingDirectory: string;
        lastOpenFolder: string;


    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({ name, email, role, gender, birthdate, workingDirectory, lastOpenFolder }: UserSettingsProps) {
            this.person = ({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = ({ workingDirectory, lastOpenFolder });



        }

    }

    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });
    userSettings.user.checkCredentials();

})();