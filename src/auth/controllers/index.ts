import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../service";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authService: AuthService
      ) { }
   
    @Post('login')
    async login(@Body() input){
        return {
            userId: input.userId,
            token:this.authService.getTokenorUser()
        }

    }

}