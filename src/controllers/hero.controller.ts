import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Param,
  HttpException,
  Delete,
} from '@nestjs/common';
import { HeroService, Hero } from '../services/hero.service';

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get('/heroes')
  getHeroes(): Array<Hero> {
    return this.heroService.getHeroes();
  }

  @Get('/heroes/:id')
  getHeroe(@Param('id') id: number): Hero | HttpException {
    return this.heroService.getHero(id);
  }

  @Post('/heroes')
  createNewHero(@Body() { name }: Hero): Hero {
    return this.heroService.createHero(name);
  }

  @Put('/heroes/:id')
  updateHero(@Param('id') id: number, @Body() body): Hero | HttpException {
    return this.heroService.updateHero(id, body);
  }

  @Delete('/heroes/:id')
  deleteHero(@Param('id') id: number): Hero | HttpException {
    return this.heroService.deleteHero(id);
  }
}
