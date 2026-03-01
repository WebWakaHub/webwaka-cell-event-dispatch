/**
 * EventDispatch — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { EventDispatcherOrchestrator } from "@webwaka/organelle-event-dispatcher";
import { MessageGatewayOrchestrator } from "@webwaka/organelle-message-gateway";

export { EventDispatcherOrchestrator } from '@webwaka/organelle-event-dispatcher';
export { MessageGatewayOrchestrator } from '@webwaka/organelle-message-gateway';

/**
 * EventDispatch Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class EventDispatchComposition {
  private eventDispatcherOrchestrator: EventDispatcherOrchestrator;
  private messageGatewayOrchestrator: MessageGatewayOrchestrator;

  constructor() {
    this.eventDispatcherOrchestrator = new EventDispatcherOrchestrator();
    this.messageGatewayOrchestrator = new MessageGatewayOrchestrator();
  }
}

export * from "./types";
