export class ImporteCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file);
  }
}
