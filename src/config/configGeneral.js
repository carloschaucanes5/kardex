module.exports =  class ConfigGeneral{
    static PORT = 3000; 
    static C200 = 200;
    static C400 = 400;
    static C401 = 401;
    static C401Message = "Acceso denegado, usuario no autorizado";
    static c500 = 500;
    static c500Message = "Error en el servidor, Intentalo más tarde";
    static SECRETTOKEN = "KARDEX";
    static KEYauthorization = "authorization";
    static C200Authorized = "Acceso autorizado";
    static API = "/kardexAPI";
    static expireTokenTime = "120";
    static numberOfRounds = 10;
    
    
}