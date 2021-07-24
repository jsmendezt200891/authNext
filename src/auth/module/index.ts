import { Module } from '@nestjs/common';
import { AuthController } from '../controllers';
import { AuthService } from '../service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
  JwtModule.registerAsync({
    useFactory: () => ({
      secret:"Secret123",
      signOptions:{
        expiresIn:'60m'
      }
    })
  })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
