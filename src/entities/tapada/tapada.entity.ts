import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
  } from 'typeorm';
  
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

   
  }