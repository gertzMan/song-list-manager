import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { Song } from '../song.entity';
@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {
    this.loadCsv();
  }

  async getAllSongs(): Promise<Song[]> {
    return await this.songRepository.find({
      order: {
        band: 'ASC',
      },
    });
  }

  async isDatabaseEmpty(): Promise<boolean> {
    const count = await this.songRepository.count();
    return count === 0;
  }

  async loadCsv(): Promise<void> {
    if (await this.isDatabaseEmpty()) {
      const filePath = 'src/data/songs.csv';
      try {
        fs.createReadStream(filePath)
          .pipe(csv({ separator: ';' }))
          .on('data', async (row) => {
            const song: Song = {
              name: row['Song Name'].toLowerCase(),
              band: row['Band'].toLowerCase(),
              year: row['Year'],
            };
            await this.songRepository.save(song);
          });
      } catch (error) {
        console.error('An error occurred while reading the CSV file:', error);
        throw new Error('Failed to load songs from CSV file');
      }
    } else {
      console.log('Database is not empty. Skipping CSV import.');
    }
  }
}
