import { DataSource } from 'typeorm';
import { CoffeeRefactor1707045452965 } from './src/migrations/1707045452965-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1707046033949 } from './src/migrations/1707046033949-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1707045452965, SchemaSync1707046033949],
});
