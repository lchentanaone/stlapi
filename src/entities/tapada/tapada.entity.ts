import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
  } from 'typeorm';
import { User } from '../user/user.entity';

  
@Entity({ name: 'tapada' })
  export class Tapada extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    date: string;

    @Column()
    runner_name: string;

    @Column()
    amount: number;

    @Column()
    draw_time: string; 

    @ManyToMany(() => User, (user) => user.tapada)
    @JoinTable()
    user: User[];
   
  }