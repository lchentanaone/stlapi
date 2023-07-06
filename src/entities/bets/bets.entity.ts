/* eslint-disable prettier/prettier */
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
  
  @Entity({ name: 'bets' })
  export class Bets extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    date: Date;
  
    @Column()
    draw_time: string;
  
    @Column()
    game_mode: string; 
  
    @Column()
    number: number;

    @Column()
    amount: number;

    @ManyToMany(() => User, (user) => user.bets, { onDelete: 'CASCADE' })
    @JoinTable()
    user: User[];

    @CreateDateColumn()
    createdAt: Date;
  }
  