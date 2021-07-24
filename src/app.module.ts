import { Event } from './Logic/entity/index';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './Logic/Controller';
import { AuthModule } from './auth/module';


@Module({
  imports: [TypeOrmModule.forRoot({
type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'example',
    database: 'nest-events',
    entities: [Event],
    synchronize: true
  }),
  AuthModule,
  TypeOrmModule.forFeature([Event])
  ],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule { }
