export class Result {
  signature: string;
  pid: string;
  alma_id: string;

  constructor(signature: string, resolver_output: any) {
    this.signature = signature;
    this.pid = resolver_output.pid;
    if (resolver_output.data) {
      this.alma_id = resolver_output.data.identifier.find(
        (identifier) => identifier.match(/^0\d+/) != null
      );
    }
  }
}
