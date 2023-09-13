class ClientComponent {
  constructor(url) {
    this.url = url;
  }
  async getData() {
    const res = await fetch(this.url);
    const data = await res.json();
    return data;
  }
}
