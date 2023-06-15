import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
  } from 'typeorm';
  
@Entity({ name: 'expenses' })
  export class Expenses extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    date: string;

    @Column()
    amount: number;

    @Column()
    type: string;

    @Column()
    user_id: number; //FK


   
  }