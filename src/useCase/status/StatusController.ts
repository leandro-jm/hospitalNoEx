import { Get, Route } from "tsoa";

interface StatusResponse {
    message: string;
  }
  
@Route("/status")
export default class HelloController {

    @Get("/ping")
    public ping(): StatusResponse {
        return {
            message: "Service ON! :)",
        };
    }
}



