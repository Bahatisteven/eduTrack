// UI PART

<template>
    <article class="subject-card">
        <div class="card-header">
            <h3>{{ subject.name }}</h3>
            <span class="badge">{{ subject.code }}</span>
        </div>
        <div class="card-body">
            <!-- :style binds a JS object to inline css-->>
             <div class="grade-badge" :style="{background: gradeColor}">
                {{subject.grade}} % &mdash; {{gradeLetter}}
             </div>
             <p class="credits">Credits: {{subject.credits}}</p>
            </div>
            <div class="card-actions">
                <button class="btn btn-sm" @click="$emit('edit', subject)">Edit</button>
                <button class="btn btn-sm" btn-danger @click="$emit('delete', subject.id)">Delete</button> 
            </div>
        </article>
    </template>





// LOGIC PART



    <script setup>
    import {computed} from 'vue'

    // props: data passed IN from parant
    const props = defineProps({
        subject: {
            type: Object,
            required: true
        }
    })

    //emit : event sent out from the parant 
    defineEmits(['edit', 'delete'])

    // computed: automatically recalculates when props.subject.grade changes
    const gradeLetter = computed(() =>{
        const g = props.subject.grade
        if (g >= 90) return 'A'
        if (g >= 80) return 'B'
        if (g >= 70) return 'C'
        if (g >= 60) return 'D'
        return 'F'

        const gradeColor = computed(() => {
            const g = props.subject.grade
            if (g >= 90) return '#10b981'
            if (g >= 80) return '#2563eb'
            if (g >= 70) return '#f59e0b'
            if (g >= 60) return '#f97316'
            return '#ef4444'
        });

    });
    </script>