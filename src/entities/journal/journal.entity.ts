import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
  } from 'typeorm';
  
@Entity({ name: 'journal' })
  export class Journal extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    date: string;

    // @Column()
    // branch_code: number; // FK

    @Column()
    description: string;

    @Column()
    type: string; 

    // @Column()
    // accounting_chart: string; 

    @Column()
    amount: number; 

   
  }