import './landing-page.scss';

export class LandingPage {
  constructor(body: HTMLElement) {
    this.render(body);
  }

  render(body: HTMLElement): void {
    body.innerHTML += require('./landing-page.html');
  }
}
