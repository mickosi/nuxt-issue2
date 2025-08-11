<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator'
import { type Test } from '#shared/types'
@Component()
class Comp extends Vue {
    @Prop()
    prop!: number

    method() { return '' }

    test!: Test

    field1 = this.prop //NOT SUPPORT
    field2 = this.method()//NOT SUPPORT
}
</script>

<template>Test</template>