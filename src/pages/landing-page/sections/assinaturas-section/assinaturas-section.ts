import Component from 'decorators/component';
import { AssinaturaComponent } from 'components/assinatura/assinatura';
import { getAssinaturas } from 'services/firebase';

@Component({
  selector: 'assinaturas-section',
  templateUrl: 'landing-page/sections/assinaturas-section/assinaturas-section.html',
  style: 'landing-page/sections/assinaturas-section/assinaturas-section.scss',
})
export class AssinaturasSection extends HTMLElement {
  assinaturas = []
  constructor() {
    super();
  }

  componentWillMount() {
    this.startObserverAssinaturas();
  }

  startObserverAssinaturas() {
    getAssinaturas()
      .on('value', (snapshot: any) => {
        this.assinaturas = snapshot.val();
        this.assinaturas.forEach((assinatura) => {
          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );
          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );          new AssinaturaComponent(
            <HTMLTableRowElement>this.getElementsByClassName('assinaturas__assinadores__lista-item')[0],
            assinatura
          );
        });
      });
  };
}
