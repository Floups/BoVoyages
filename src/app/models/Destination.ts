export class Destination {
  id: number;
  region: string;
  description: string;
  images: string[];


  constructor(id: number, region: string, description: string, images: string[]) {
    this.id = id;
    this.region = region;
    this.description = description;
    this.images = images;
  }
}
