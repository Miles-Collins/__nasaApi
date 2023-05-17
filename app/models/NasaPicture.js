export class NasaPicture {
  constructor(data) {
    this.author = data.copyright || 'Miles Collins'
    this.date = data.date
    this.description = data.explanation
    this.title = data.title
    this.imgUrl = data.url
  }

  get DetailsTemplate() {
    return `
      <div class="col-12 col-md-6 text-end detailText">
        <div class="pictureTitle">
          <h1>${this.title}</h1>
          <h2>${this.date}</h2>
        </div>
        <div class="pictureDescription">
          <p>${this.description}</p>
        </div>
      </div>
    `
  }
}