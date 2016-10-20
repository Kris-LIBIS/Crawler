export class Result {
  signature: string;
  pid: string;
  resolver_url: string;
  entity_type: string;
  title: string;
  alma_id: string;
  data: any;

  constructor(signature: string, resolver_output: any) {
    this.signature = signature;
    this.pid = resolver_output.pid;
    this.resolver_url = 'http://resolver.libis.be/' + this.pid + '/representation';
    this.entity_type = resolver_output.entity_type;
    this.data = resolver_output.data;
    if (this.data) {
      this.title = this.data.title;
      this.alma_id = this.data.identifier.find(
        (identifier) => identifier.match(/^0\d+/) != null
      );
    }
  }
}
