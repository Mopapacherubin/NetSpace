import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'chat_participantas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('chat_id').references('id').inTable('chats').onDelete('CASCADE').notNullable().unique()
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable().unique()
      table.enum('role', ['admin', 'member']).notNullable().defaultTo('member')
      table.string('custom_name', 100).nullable()
      table.boolean('is_muted').notNullable().defaultTo(false)
      table.timestamp('joined_at')
      table.timestamp('left_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}