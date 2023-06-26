import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
  } from 'typeorm';
import { Branch } from '../branch/branch.entity';
import { Accounting } from '../accounting_charts/accounting.entity';

@Entity({ name: 'journal' })
  export class Journal extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    date: Date;

    @ManyToMany(() => Branch, (branch) => branch.journal, { onDelete: 'CASCADE' })
    @JoinTable()
    branch: Branch[];

    @Column()
    description: string;

    @Column()
    type: string; 

    @ManyToMany(() => Accounting, (accounting) => accounting.journal, { onDelete: 'CASCADE' })
    @JoinTable()
    accounting: Accounting[];

    @Column()
    amount: number; 
   
  }