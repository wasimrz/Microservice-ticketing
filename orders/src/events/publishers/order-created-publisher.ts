import { Publisher, OrderCreatedEvent, Subjects } from "@wrdev/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
