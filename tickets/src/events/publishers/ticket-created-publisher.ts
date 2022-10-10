import { Publisher, Subjects, TicketCreatedEvent } from "@wrdev/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
