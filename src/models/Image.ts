import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')
export default class Image{
    static orphanage(arg0: () => typeof Image, orphanage: any) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn('increment')
    id: number;   

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;
}