import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index(['name', 'type'])
  @Column()
  name: string;

  @Column()
  payload: Record<string, any>;
}
