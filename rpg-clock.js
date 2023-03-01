class Clock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const size = this.getAttribute("size") || 4;
    const checked = this.getAttribute("checked") || 0;
    const color = this.getAttribute("color") || "black";
    const bg = this.getAttribute("bg") || "white";
    const alt = this.getAttribute("alt");
    const angle = (Math.PI * 2) / size;

    this.attachShadow({ mode: "open" });

    const canvas = document.createElement("canvas");
    canvas.height = 100;
    canvas.width = 100;
    if (alt) canvas.setAttribute("alt", alt);

    this.shadowRoot.append(canvas);

    const ctx = canvas.getContext("2d");

    ctx.rotate(Math.PI / -2);
    ctx.translate(-100, 0);

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    let turns = 0;
    for (let slices = 0; slices < size; slices++) {
      ctx.strokeStyle = slices < checked ? bg : color;
      ctx.fillStyle = slices < checked ? color : bg;

      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.arc(50, 50, 48, turns, turns + angle);
      ctx.lineTo(50, 50);
      ctx.fill();
      ctx.stroke();
      turns += angle;
    }
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = "transparent";
    ctx.arc(50, 50, 48, 0, Math.PI * 2);
    ctx.stroke();
  }
}

customElements.define("rpg-clock", Clock);
