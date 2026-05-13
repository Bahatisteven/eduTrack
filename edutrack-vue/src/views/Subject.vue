<script setup lang="ts">
import Subject from '@/components/Subject.vue';
import { filterVitePlugins } from 'rolldown/filter';

</script>

<template>
  <div class="page">
    <div class="page-header">
      <div class="container">
        <h2>My Subjects</h2>
        <button class="btn btn-primary" @click="showForm = true">+ Add Subject</button>
      </div>
    </div>


    <div class="container">
        <!--v-model binds input value to search query reactively-->
        <!--v-model: this is used to connect data and input,
        v-if: is used to show/hide elements, 
        v-for: is used tp loop through data,
        :bind or v-bind is used to dynamically set attributes,
        -->
       <input v-model="searchQuery" type="text" class="search-input"
       placeholder="=Search subjects..." />

          <!-- v-if  it can also show message when there are no result-->
         <p v-if="filteredSubjects.length === 0" class="empty-msg">
          No subjects match "{{searchQuery}}" 
         </p>

          <!--v-else-if and v-else must immediately follow v-if -->
        <div v-else class="subjects-grid">
           <!--v-for loops over the filtered list; :key is required-->
          <SubjectCard 
          v-for="subject in filteredSubjects"
          :key="subject.id"
          :subject="subject"
          @edit="openEdit"
          @delete="deleteSubject"
          />
        </div>
    </div>
  </div>
</template>


<script setup>
import {ref, computed} from 'vue'





// temporary local data

const subject = ref([
  { id: 1, name: "JavaScript Fundamentals", code: "SWDJF301" grade: 85, credits: 3 },
  { id: 2, name: "Vue.Js Framework", code: "SWDVF301" grade: 78, credits: 3 },
  { id: 3, name: "Version Control", code: "SWDVC301" grade: 92, credits: 3 },
  { id: 4, name: "Website Development", code: "SWDWD301" grade: 88, credits: 3 },

]); // arrays 

const searchQuery = ref('')
const showForm = ref(false)

// computed: run whenever searchQueryor subjects changes 

const filteredSubjects = computed(() => {
  subject.value.filter(s => s.name.toLowerCase()).includes(searchQuery.value.toLowerCase()) ||
  s.code.toLowerCase().includes(searchQuery.value.toLowerCase())
});

function openEdit (subject) {
  console.log('edit', subject)
}

function deleteSubject(id) {
  if(confirm('Delete this subject?')) {
    subject.value =subjects.value.filter(s => s.id !== id)
  }
  
}
</script>




