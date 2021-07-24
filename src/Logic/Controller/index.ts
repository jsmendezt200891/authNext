
import { UpdateEventDto } from './../dto/update-events.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEventDto } from "../dto";
import { MoreThan, Repository } from 'typeorm';
import { Event } from './../entity/index';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('/events')
export class EventsController {
   constructor(
      @InjectRepository(Event)
      private readonly repository: Repository<Event>
   ) { }

   @Get()
   async findAll() {

      return await this.repository.find();
   }

   @Get(':id')
   async findOne(@Param() id) {
      const event = await this.repository.findOne(id);
      return event;
   }

   @Get('/practice')
   async practice() {
      return await this.repository.find({
         where: { id: MoreThan(3)}
      });

   }

   @Post()
   async create(@Body() input: CreateEventDto) {
      return await this.repository.save({
         ...input,
         when: new Date(input.when)
      })
   }

   @Patch(':id')
   async update(@Param() id, @Body() input: UpdateEventDto) {
      const event = await this.repository.findOne(id);
      return await this.repository.save({
         ...event,
         ...input,
         when: input.when ? new Date(input.when) : event.when

      });

   }

   @Delete(':id')
   async remove(@Param() id) {
      const event = await this.repository.findOne(id);
      await this.repository.remove(event);
   }

}