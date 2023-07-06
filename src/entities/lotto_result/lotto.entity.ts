/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
  } from 'typeorm';
  
  @Entity({ name: 'lotto' })
  export class Lotto extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    date: Date;
  
    @Column()
    draw_time: String;
  
    @Column()
    game_mode: string; 
  
    @Column()
    number: number;
 
    @CreateDateColumn()
    createdAt: Date;
   
  }
  