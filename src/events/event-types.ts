// src/event-types.ts
export interface Event {
  userId: string;
  event: string;
  properties: Record<string, any>;
}

export interface IdentifyEvent {
  userId: string;
  traits: Record<string, any>;
}
