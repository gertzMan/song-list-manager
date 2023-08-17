import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  band: string;

  @Column()
  year: string;
}
