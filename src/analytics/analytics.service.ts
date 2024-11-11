import { Injectable, Logger } from '@nestjs/common';
import { Analytics } from '@segment/analytics-node';
import { Event, IdentifyEvent } from '../events/event-types';

@Injectable()
export class AnalyticsService {
  private readonly logger = new Logger(AnalyticsService.name);
  private readonly segment: Analytics;

  constructor(private readonly write_key: string) {
    this.segment = new Analytics({
      writeKey: this.write_key,
    });
  }

  async identify(event: IdentifyEvent) {
    try {
      this.segment.identify(event);
      this.logger.log(`Identified user: ${event.userId}`);
    } catch (error) {
      this.logger.error(`Failed to identify user: ${event.userId}`, error);
    }
  }

  async trackEvent(event: Event) {
    try {
      this.segment.track(event);
      this.logger.log(`Tracked event: ${JSON.stringify(event)}`);
    } catch (error) {
      this.logger.error(`Failed to track event: ${event.event}`, error);
    }
  }
}
