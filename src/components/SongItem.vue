<template>
  <li
    class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
  >
    <div>
      <RouterLink
        :to="{ name: 'song', params: { id: song.docID } }"
        class="font-bold block text-gray-600"
        >{{ song.modified_name }}</RouterLink
      >
      <span class="text-gray-500 text-sm">{{ song.display_name }}</span>
    </div>

    <RouterLink
      custom
      :to="{ name: 'song', params: { id: song.docID }, hash: '#comments' }"
      v-slot="{ navigate }"
      class="text-gray-600 text-lg"
    >
      <span class="comments" @click="navigate">
        <i class="fa fa-comments text-gray-600"></i>
        {{ song.comment_count }}
      </span>
    </RouterLink>
  </li>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'SongItem',
  props: {
    song: {
      type: Object,
      required: false
    }
  },
  components: { RouterLink }
}
</script>
