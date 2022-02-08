import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableCoordinates1644353340108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "coordinates",
      new TableColumn({
        name: "description",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("coordinates", "description");
  }
}
