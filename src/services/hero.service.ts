import { Injectable, HttpException } from '@nestjs/common';

export interface Hero {
  id: number;
  name: string;
}

const heroes: [Hero] = [
  {
    id: 1,
    name: 'Superman',
  },
];

@Injectable()
export class HeroService {
  getHero(id: number): Hero | HttpException {
    const hero = heroes.find((hero: Hero) => hero.id === Number(id));

    if (!hero) {
      throw new HttpException('Hero not found', 404);
    }

    return hero;
  }

  getHeroes(): Array<Hero> {
    return heroes;
  }

  createHero(name: string): Hero {
    heroes.push({
      id: heroes[heroes.length - 1].id + 1,
      name,
    });

    return heroes[heroes.length - 1];
  }

  updateHero(id: number, data): Hero | HttpException {
    const hero = heroes.find((hero: Hero) => hero.id === Number(id));

    if (!hero) {
      throw new HttpException('Hero not found', 404);
    }

    heroes[heroes.indexOf(hero)] = {
      ...heroes[heroes.indexOf(hero)],
      ...data,
    };

    return heroes.find((hero: Hero) => hero.id === Number(id));
  }

  deleteHero(id: number): Hero | HttpException {
    const hero = heroes.find((hero: Hero) => hero.id === Number(id));

    if (!hero) {
      throw new HttpException('Hero not found', 404);
    }

    heroes.splice(heroes.indexOf(hero), 1);

    return hero;
  }
}
