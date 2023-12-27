import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  rating: string;

  @Column()
  description: string;

  @Column()
  hotel_id: string;
}
