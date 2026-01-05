<script setup lang="ts">
import { Button, Checkbox, Column, DataTable } from 'primevue'
import { onMounted } from 'vue'
import { useContaminantStore } from '../../stores/contaminants'
import { Contaminant, ContaminantSource } from '../../types/contaminants'
import { Workbook, WorksheetViewFrozen, WorksheetViewSplit } from 'exceljs'

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

const buildExcel = () => {
  const workbook = new Workbook()
  workbook.creator = "Ramboll"
  workbook.calcProperties.fullCalcOnLoad = true
  const contaminantSheet = workbook.addWorksheet('Contaminants', {})
  contaminantSheet.views = [
    {
      state: 'frozen',
      xSplit: 1,
    }
  ]
  contaminantSheet.columns = [
    { header: 'Source - Contaminant', key: 'contaminant' },
    { header: 'Pathway', key: 'pathway' },
    { header: 'Receptor', key: 'receptor' },
    { header: 'Likelihood', key: 'likelihood' },
    { header: 'Consequence', key: 'consequence' },
    { header: 'Risk', key: 'risk' },
    { header: 'Comments', key: 'comments' },
  ]

  const contaminantsArray = getUniqueContaminants()
    .flatMap((srcKey: string) =>
      contaminantStore.contaminants.has(srcKey)
        ?
        contaminantStore
          .contaminants
          .get(srcKey)
          ?.other
          .map((otherBits: Contaminant): string[] =>
            [
              contaminantStore.contaminants.get(srcKey)?.name ?? "error",
              otherBits.pathway,
              otherBits.receptor,
              "",
              "",
              "",
              "",
            ]
          )
        : []
    )
  contaminantSheet.addRows(contaminantsArray)
  var startCell = 0
  var previousValue = "";
  contaminantsArray.forEach((val: string[] | undefined, idx: number) => {
    if (val === undefined) return;
    if (val[0] !== previousValue) {
      if (startCell != 0) {
        contaminantSheet.mergeCells(`A${startCell}:A${idx}`)
        console.log(`"A${startCell}:A${idx}"`)
      }
      startCell = idx + 1
      previousValue = val[0]
    }
  })
}

</script>

<template>
  <div>
    <div>
      <Button label="Prepare File" @click="buildCsv()" />
      <Button label="To Excel and Beyond" @click="buildExcel()" />
    </div>
    <div v-if="contaminantStore.isLoaded">
      <DataTable :value="contaminantStore.sources">
        <Column field="name" header="Source"></Column>
        <Column field="internal" header="Onsite">
          <template #body="slotProps">
            <Checkbox :aria-label="getAriaLabel(intStart, slotProps.data.name)" size="large"
              v-model="slotProps.data.internal" binary />
          </template>
        </Column>
        <Column field="external" header="Offsite">
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