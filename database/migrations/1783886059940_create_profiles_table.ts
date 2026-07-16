import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'profiles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable().unique()
      table.string('display_name', 100)
      table.string('username', 50).notNullable().unique()
      table.text('bio').nullable()
      table.string('avatar').nullable()
      table.string('cover').nullable()
      table.string('location', 100).nullable()
      table.string('website', 255).nullable()
      table.boolean('is_verified').notNullable().defaultTo(false)
      table.boolean('is_private').notNullable().defaultTo(false)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}