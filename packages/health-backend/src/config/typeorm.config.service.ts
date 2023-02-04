import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      /**
       * 데이터베이스의 필드 이름 전략을 스네이크케이스로 설정
       * createdAt => created_at
       */
      namingStrategy: new SnakeNamingStrategy(),
      type: 'postgres',
      host: this.configService.get('DATABASE_HOST'),
      password: this.configService.get('DATABASE_PASSWORD'),
      port: this.configService.get('DATABASE_PORT'),
      username: this.configService.get('DATABASE_USER'),
      database: this.configService.get('DATABASE_DATABASE'),
      autoLoadEntities: true,
      /**
       * true 값을 주면 애플리케이션을 다시 실행할 때 엔티티안에서 수정된 컬럼의 길이, 타입 변경값등을 해당 테이블을 Drop한 후 다시 생성해줍니다.
       */
      synchronize: true,
    }
  }
}
