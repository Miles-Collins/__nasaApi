export class SandboxPicture{
  constructor(data) {
    this.id = data.id
    this.creator = data.creator
    this.date = data.date
    this.imgUrl = data.imgUrl 
  }

  get FavoritePicture() {
    return `
      <div onclick="app.sandboxController.setActive(${this.date})" class="col-4">
      <img class="img-fluid mt-2" src="${this.imgUrl}" alt="">
    </div>
    `
  }
}