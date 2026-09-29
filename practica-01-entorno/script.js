functionmsj(){
    document.getElementById("saludo").innerHTML = "TIID_04_01Javascript";
    document.getElementById("demo").innerHTML = "<h2>Hola Mundo</h2>";
}


consola.log("Hola Mundo");
consola.log(2+2);
consola.group("Información a mostrar");
consola.log("UA: ",navigator.userAgent);
consola.log("Lang: ",navigator.language);
consola.log("Plataforma: ",navigator.platform);
consola.log("Cookies habilitadas: ",navigator.cookieEnabled);
consola.log("Online: ",navigator.onLine);
consola.groupEnd();