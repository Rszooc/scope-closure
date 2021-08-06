const helloWorld = () => {
    const hello = 'Hola mundo';
    console.log(hello);
}

helloWorld();

const scope = () => {
    let scope = 'local'; //Error
    const func = () => {
        return scope;
    }
    console.log(func());
}

scope();
