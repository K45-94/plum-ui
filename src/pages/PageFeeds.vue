<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <template v-if="!loadingPosts && posts.length">
          <q-card
            v-for="post in posts"
            :key="post.id"
            class="card-post q-pt-lg q-pb-lg q-mb-xs q-mt-xs"
            flat
          >
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img
                    src="https://th.bing.com/th/id/R3cdbba30e7804ab8c078c656f26eeae0?rik=xi2tB9WVGyFYBw&pid=ImgRaw"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold">Plum Account</q-item-label>
                <q-item-label caption> {{ post.location }} </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />
            <q-img
              src="https://th.bing.com/th/id/R25587d8bcdbeb893a50e9009a61090fa?rik=6K88tzsF2AL0ww&pid=ImgRaw"
            />

            <q-card-section>
              <div>{{ post.caption }}</div>
              <div class="text-caption text-grey">
                {{ post.date(niceDate) }}
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row justify-between">
                <q-btn color="secondary" icon="far fa-comment" flat round />
                <q-btn color="secondary" icon="fas fa-retweet" flat round />
                <q-btn color="secondary" icon="far fa-heart" flat round />
                <q-btn color="secondary" icon="fas fa-trash" flat round />
              </div>
            </q-card-section>
          </q-card>
          <q-card
            v-for="post in posts"
            :key="post.id"
            class="card-post q-pt-lg q-pb-lg q-mb-xs q-mt-xs"
            flat
          >
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img
                    src="https://th.bing.com/th/id/OIP.UMHscqzA96VauTDorTsA0wHaFG?pid=ImgDet&rs=1"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold">User Plum</q-item-label>
                <q-item-label caption> {{ post.location }} </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />
            <q-img
              src="https://th.bing.com/th/id/R397e8c85ef0d635ec4e69f7e8d34e1c0?rik=3kttkP8PyzKBqA&pid=ImgRaw"
            />

            <q-card-section>
              <div>{{ post.caption }}</div>
              <div class="text-caption text-grey">
                {{ post.date(niceDate) }}
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row justify-between">
                <q-btn color="secondary" icon="far fa-comment" flat round />
                <q-btn color="secondary" icon="fas fa-retweet" flat round />
                <q-btn color="secondary" icon="far fa-heart" flat round />
                <q-btn color="secondary" icon="fas fa-trash" flat round />
              </div>
            </q-card-section>
          </q-card>
        </template>
        <template v-else-if="!loadingPosts && !posts.length">
          <h5 class="text-center text-grey">NO POSTS</h5>
        </template>
        <template v-else>
          <q-card flat style="max-width: 300px">
            <q-item>
              <q-item-section avatar>
                <q-skeleton
                  class="bg-accent q-pt-lg q-pb-lg q-mb-xs q-mt-xs"
                  type="QAvatar"
                  animation="pulse-y"
                  size="40px"
                />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <q-skeleton class="bg-black" type="text" animation="fade" />
                </q-item-label>
                <q-item-label caption>
                  <q-skeleton class="bg-black" type="text" animation="fade" />
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-skeleton
              class="bg-red"
              height="200px"
              square
              animation="pulse-x"
            />

            <q-card-section>
              <q-skeleton
                type="text"
                class="text-subtitle2 bg-green"
                animation="pulse-y"
              />
              <q-skeleton
                type="text"
                width="50%"
                class="text-subtitle2 bg-green"
                animation="pulse-y"
              />
            </q-card-section>
          </q-card>
        </template>
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img
                src="https://th.bing.com/th/id/R3cdbba30e7804ab8c078c656f26eeae0?rik=xi2tB9WVGyFYBw&pid=ImgRaw"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold"
              >Nairobi Securities Exchange</q-item-label
            >
            <q-item-label caption>Nairobi Securities Exchange</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
    <router-view />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { date } from "quasar";

export default defineComponent({
  name: "PageFeeds",
  data() {
    return {
      posts: [],
      loadingPosts: false,
    };
  },
  methods: {
    getPosts() {
      this.loadingPosts = true;
      this.$axios
        .get(`${process.env.API}/posts`)
        .then((response) => {
          this.posts = response.data;
          this.loadingPosts = false;
        })
        .catch((err) => {
          this.$q.dialog({
            title: "Err",
            message: "Could not connect with our search service.. 🙂",
          });
          this.loadingPosts = false;
        });
    },
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMMM DD h:mmA");
    },
  },
  created() {
    this.getPosts();
  },
});
</script>
