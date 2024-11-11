import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Analytics } from '@segment/analytics-node';

@Module({
  exports: [Analytics],
  imports: [ConfigModule],
  providers: [
    {
      provide: Analytics,
      useFactory: (configService: ConfigService) => {
        const writeKey = configService.get<string>('SEGMENT_WRITE_KEY');
        if (!writeKey) {
          throw new Error('SEGMENT_WRITE_KEY is missing.');
        }
        return new Analytics({ writeKey });
      },
      inject: [ConfigService],
    },
  ],
})
export class AnalyticsModule {}
