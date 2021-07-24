import { CreateEventDto } from './index';
import { PartialType } from "@nestjs/mapped-types";

export class UpdateEventDto extends PartialType(CreateEventDto){}