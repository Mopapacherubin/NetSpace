import { MediaSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Post from './post.js'

export default class Media extends MediaSchema {
  @belongsTo(() => Post) declare post: BelongsTo<typeof Post>
}
