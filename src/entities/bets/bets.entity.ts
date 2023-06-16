/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
  } from 'typeorm';
  
  @Entity({ name: 'bets' })
  export class Bets extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    date: string;
  
    @Column()
    draw_time: string;
  
    @Column()
    game_mode: string; 
  
    @Column()
    number: number;

    @Column()
    amount: number;

    // @Column()
    // user_id: number;

  }
  