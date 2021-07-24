import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
      ) { }

    public getTokenorUser(){
        return this.jwtService.sign({
            username:"test",
            sub:1
        })
    }
}
