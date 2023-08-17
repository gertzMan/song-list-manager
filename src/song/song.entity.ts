import { Entity , PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  band: string;
 
  @Column()
  title: string;
}