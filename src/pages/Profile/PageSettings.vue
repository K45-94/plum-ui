<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card flat>
          <q-item>
            <q-item-section class="col-4">
              <q-item-label class="text-bold center-left"
                >Notifications</q-item-label
              >
            </q-item-section>
            <q-item-section class="col-4">
              <q-toggle
                :label="NotificationsToggle"
                color="secondary"
                false-value="Off"
                true-value="On"
                v-model="NotificationsToggle"
                class="absolute-right text-caption"
              />
            </q-item-section>
          </q-item>
        </q-card>
        <q-space class="q-pa-sm" />
        <q-card flat>
          <q-item>
            <q-item-section class="col-4">
              <q-item-label class="text-bold center-left"
                >Security</q-item-label
              >
            </q-item-section>
            <q-item-section class="col-4">
              <q-btn
                to="/security"
                class="absolute-right"
                icon="eva-arrow-ios-forward-outline"
                flat
                dense
                color="black"
              />
            </q-item-section>
          </q-item>
        </q-card>
        <q-space class="q-pa-sm" />
        <q-card flat>
          <q-item>
            <q-item-section class="col-4">
              <q-item-label class="text-bold center-left">Themes</q-item-label>
            </q-item-section>
            <q-item-section class="col-4">
              <q-toggle
                :label="ThemeToggle"
                color="dark"
                false-value="Off"
                true-value="On"
                v-model="ThemeToggle"
                class="absolute-right text-caption"
              />
            </q-item-section>
          </q-item>
        </q-card>
        <q-space class="q-pa-sm" />
        <q-card flat>
          <q-item>
            <q-item-section class="col-4">
              <q-item-label class="text-bold center-left"
                >Help n Support</q-item-label
              >
            </q-item-section>
            <q-item-section class="col-4">
              <q-btn
                to="/help"
                class="absolute-right"
                icon="eva-arrow-ios-forward-outline"
                flat
                dense
                color="black"
              />
            </q-item-section>
          </q-item>
        </q-card>
        <q-space class="q-pa-sm" />
        <q-card flat>
          <q-item>
            <q-item-section class="col-4">
              <q-item-label class="text-bold center-left"
                >About Plum</q-item-label
              >
            </q-item-section>
            <q-item-section class="col-4">
              <q-btn
                to="/about"
                class="absolute-right"
                icon="eva-arrow-ios-forward-outline"
                flat
                dense
                color="black"
              />
            </q-item-section>
          </q-item>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageSettings",
  data() {
    return {
      NotificationsToggle: "On",
      ThemeToggle: "Dark",
    };
  },
});
</script>
