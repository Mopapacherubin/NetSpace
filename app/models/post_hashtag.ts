import { PostHashtagSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Post from './post.js'
import Hashtag from './hashtag.js'

export default class PostHashtag extends PostHashtagSchema {
  @belongsTo(() => Post) declare post: BelongsTo<typeof Post>
  @belongsTo(() => Hashtag) declare hashtag: BelongsTo<typeof Hashtag>
}
