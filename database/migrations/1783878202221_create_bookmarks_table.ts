import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bookmarks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unique().unsigned().references('id').inTable('users').onDelete('CASCADE').notNullable()
      table.integer('post_id').unique().unsigned().references('id').inTable('posts').onDelete('CASCADE').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}