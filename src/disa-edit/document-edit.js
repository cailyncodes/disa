class DocumentEdit extends Polymer.Element {
  
  static get is() { return 'document-edit'; }

  static get properties() {
    return {
      owner: {
        type: Object
      }
    };
  }

  static get observers() {
    return [
    ]
  }

  constructor() {
    super();
  }
  
  connectedCallback() {
    super.connectedCallback();
  }

  __getOptions(key, options) {
    return Utils.__getOptions(key, options);
  }

  __indexOf(value, key, options) {
    return Utils.__indexOf(value, key, options);
  }

  createFromData(formData) {
    let document = new Document();

    let date = new TriplePartDate();

    let year = formData['year'];
    let month = formData['month'];
    let day = formData['day'];

    date.year = year;
    date.month = month;
    date.day = day;

    document.date = date;

    let stringLocation = formData['stringLocation'];
    let colonyState = formData['colonyState'];
    let nationalContext = formData['nationalContext'];
    document.stringLocation = stringLocation;
    document.colonyState = colonyState;
    document.nationalContext = nationalContext;

    let sourceType = formData['sourceType'];
    let recordType = formData['recordType'];
    let citation = formData['citation'];
    document.sourceType = sourceType;
    document.recordType = recordType;
    document.citation = citation;

    return document;    
  }
}

window.customElements.define(DocumentEdit.is, DocumentEdit);