class MyPlugin {
    apply(compiler){
        console.log(Object.prototype.toString.call(compiler))

    }
}

module.exports =  MyPlugin;
