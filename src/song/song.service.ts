import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';
import * as fs from 'fs';
import * as csv from 'csv-parser'


@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private  songRepository: Repository<Song>,
  ) {}
 
  async loadCSV(filePath: string): Promise<void> {
    try {
      const songs = [];
 
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          songs.push({
            band: row.band.toLowerCase(),
            title: row.title.toLowerCase(),
          });
        })
        .on('end', async () => {
          await this.songRepository.save(songs);
        });
    } catch (error) {
      console.error(error);
    }
  }
 
  async getSongs(): Promise<Song[]> {
    return this.songRepository.find({ order: { band: 'ASC' } });
  }
}