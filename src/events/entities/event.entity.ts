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

  @Column('jsonb')
  payload: Record<string, any>;
}
