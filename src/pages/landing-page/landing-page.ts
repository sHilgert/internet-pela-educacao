import Component from '../../decorators/component';

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page/landing-page.html',
  style: 'landing-page/landing-page.scss',
})
export class LandingPage extends HTMLElement {
  constructor() {
    super();
  }
}
