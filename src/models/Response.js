class Response{
     constructor(code,message,response){
        this.code= code;
        this.message = message;
        this.response = response;
     }

     getCode(){
        return this.code;
     }
     setCode(newCode){
        this.code = newCode;
     }
     getMessage(){
        return this.message;
     }
     setMessage(newMessage){
        this.message = newMessage;
     }

     getResponse(){
        return this.response;
     }
     setResponse(newResponse){
        this.response = newResponse;
     }

}

module.exports = Response;