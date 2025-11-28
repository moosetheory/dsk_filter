<script setup lang="ts">
import { Button, Checkbox, Column, DataTable } from 'primevue'
import { onMounted } from 'vue'
import { useContaminantStore } from '../../stores/contaminants'
import { Contaminant, ContaminantSource } from '../../types/contaminants'

const contaminantStore = useContaminantStore()

const intStart = "Internal contaminant source"
const extStart = "External contaminant source"

onMounted(() => {
  if (!contaminantStore.isLoaded) {
    contaminantStore
      .fetchAll()
  }
})

const getAriaLabel = (start: string, contaminant: string): string => {
  return `${start} '${contaminant}''`
}

const getUniqueContaminants = (): string[] =>
  contaminantStore
    .sources
    .flatMap((src: ContaminantSource): string[] =>
      (src.internal || src.external) ? src.contaminants : []
    )
    .filter((value: string, index: number, array: string[]): boolean =>
      array.indexOf(value) === index
    )

const buildCsv = () => {
  const res = getUniqueContaminants()
    .flatMap((srcKey: string) =>
      contaminantStore.contaminants.has(srcKey)
        ?
        contaminantStore
          .contaminants
          .get(srcKey)
          ?.other
          .flatMap((otherBits: Contaminant): string =>
            `"${contaminantStore.contaminants.get(srcKey)?.name}","${otherBits.pathway}","${otherBits.receptor}","","","",""`
          )
        : []
    )
    .reduce((previousValue: string, currentValue: string | undefined): string => {
      return (currentValue === undefined || currentValue === "") ? previousValue : `${previousValue}\n${currentValue}`
    }, '"Source - Contaminant","Pathway","Receptor","Likelihood","Consequence","Risk","Comments"')

  const blob = new Blob([res], { type: 'text/csv' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob);
  link.download = "contaminants.csv"
  link.click()
  URL.revokeObjectURL(link.href)
}
</script>

<template>
  <div>
    <div>
      <Button label="Prepare File" @click="buildCsv()" />
    </div>
    <div v-if="contaminantStore.isLoaded">
      <DataTable :value="contaminantStore.sources">
        <Column field="name" header="Source"></Column>
        <Column field="internal" header="Internal">
          <template #body="slotProps">
            <Checkbox :aria-label="getAriaLabel(intStart, slotProps.data.name)" size="large"
              v-model="slotProps.data.internal" binary />
          </template>
        </Column>
        <Column field="external" header="External">
          <template #body="slotProps">
            <Checkbox :aria-label="getAriaLabel(extStart, slotProps.data.name)" size="large"
              v-model="slotProps.data.external" binary />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<style lang="css" scoped></style>