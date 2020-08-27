export class AssinaturaComponent {
  assinatura: any;

  constructor(container: HTMLTableRowElement, assinatura: any) {
    this.assinatura = assinatura;
    this.render(container);
  }

  render(container: HTMLElement) {
    let assinaturaHtml = require('./assinatura.html');
    Object.keys(this.assinatura).forEach(property => {
      assinaturaHtml = assinaturaHtml.replace(`{{ ${property } }}`, this.assinatura[property])
    });
    container.innerHTML += assinaturaHtml;
  }
}
