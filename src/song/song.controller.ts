
import { Controller, Get } from '@nestjs/common';
import { SongService } from './song.service';

import { Song } from './song.entity';
 
@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}
 
  @Get()
  async getSongs(): Promise<Song[]> {
    return this.songService.getSongs();
  }
}