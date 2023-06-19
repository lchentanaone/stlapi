/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany
  } from 'typeorm';
import { Journal } from '../journal/journal.entity';
  
  @Entity({ name: 'accounting' })
  export class Accounting extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    account_title: string;
  
    @Column()
    classification: string;
  
    @Column()
    group: string;
  
    @Column()
    type: string;
   
    @ManyToMany(() => Journal, (journal) => journal.accounting, { onDelete: 'CASCADE' })
    journal: Journal[];


  }
  