<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator'
import { type Test } from '#shared/types'
@Component()
class Comp extends Vue {
    @Prop()
    prop!: number

    method() { return '' }

    test!: Test

    field1 = 'Test1'
    field2 = 'Test2'
}
</script>

<template>Test</template>
