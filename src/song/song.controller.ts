import { Controller, Get } from '@nestjs/common';
import { SongService } from './song.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Song } from '../song.entity';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}
  @Get('/')
  async getSongs() {
    return await this.songService.getAllSongs();
  }
}
