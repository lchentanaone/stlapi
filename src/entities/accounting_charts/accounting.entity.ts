/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    BaseEntity,
  } from 'typeorm';
  
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
   
    // @ManyToMany(() => Branch, (branch) => branch.attendant)
    // branch: Branch[];
  
    @CreateDateColumn()
    createdAt: Date;
  }
  