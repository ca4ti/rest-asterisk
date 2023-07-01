export interface ReportQueueI {
  _id: string;
  customerId: string;
  uuid: string;
  report: string;
  data: [];
}
