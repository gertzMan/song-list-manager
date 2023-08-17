import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
import { Song } from './song/song.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.17.0.2',
      port: 5432,
      username: 'song',
      password: 'password',
      database: 'song_db',
      entities: [Song],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Song])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
