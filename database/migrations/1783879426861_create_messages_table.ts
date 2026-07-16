import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'messages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('chat_id').references('id').inTable('chats').onDelete('CASCADE').notNullable()
      table.integer('sender_id').references('id').inTable('users').onDelete('CASCADE').notNullable()
      table.text('content').nullable()
      table.enum('type', ['text', 'image', 'file']).notNullable().defaultTo('text')
      table.integer('reply_to_id').references('id').inTable('messages').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.timestamp('deleted_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}