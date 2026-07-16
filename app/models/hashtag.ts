import { HashtagSchema } from '#database/schema'
import { hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import PostHashtag from './post_hashtag.js'
import Post from './post.js'

export default class Hashtag extends HashtagSchema {
  @hasMany(() => PostHashtag) declare postHashtags: HasMany<typeof PostHashtag>
  @manyToMany(() => Post, { pivotTable: 'post_hashtags' }) declare posts: ManyToMany<typeof Post>
}
