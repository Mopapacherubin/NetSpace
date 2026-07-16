import { CommentSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Post from './post.js'

export default class Comment extends CommentSchema {
  @belongsTo(() => User) declare user: BelongsTo<typeof User>
  @belongsTo(() => Post) declare post: BelongsTo<typeof Post>
  @belongsTo(() => Comment, { foreignKey: 'commentParentId' }) declare parent: BelongsTo<typeof Comment>
  @hasMany(() => Comment, { foreignKey: 'commentParentId' }) declare replies: HasMany<typeof Comment>
}
