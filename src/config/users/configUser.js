module.exports = class Configuser{

    static activeStatusUser = "a";
    static registerSuccessUser = "usuario registrado con éxito";
    static userNotAuthorized = "Usuario no autorizado";
    static userInvalideData = "Datos de usuario invalidos";
    static passwordInvalideData = "contraseña incorrecta";
    static authenticatedUser = "Usuario autenticado";
    static userFound = "Usuerio encontrado";
    static zeroResults = "Cero resultados";
    
    static emailDuplicateConstraint = "uq_users_email";
    static emailDuplicate = "Correo electrónico duplicado";
    static identificationDuplicateConstraint = "uq_users_identification";
    static identificationDuplicate = "El número de identificacion ya esta en uso";
}